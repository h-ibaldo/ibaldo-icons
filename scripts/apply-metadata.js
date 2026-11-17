#!/usr/bin/env node

/**
 * Apply a naming batch to metadata/icons/*.json
 *
 * A batch file is a JSON object keyed by filename (without .svg):
 *   {
 *     "1-user-head-24": {
 *       "name": "AvatarHeadSpaceBuns",
 *       "displayName": "Avatar head, space buns",
 *       "description": "...",
 *       "tags": ["..."],
 *       "categories": ["people"],
 *       "accessibility": { "role": "informative", "suggestedLabel": "User avatar" }
 *     }
 *   }
 *
 * Fields in the batch replace the same fields in the existing metadata file;
 * other fields are kept. Nothing is written unless every entry is valid and
 * every name is unique across the whole library, aliases included.
 *
 * With --create, entries for new icons (an SVG in static/icons/optimized/ but
 * no metadata file yet) create the file. New entries must have every field
 * (name, displayName, description, tags, categories, accessibility); the
 * script fills technical, version, contributors and deprecated.
 *
 * Usage:
 *   node scripts/apply-metadata.js <batch.json> [--dry-run] [--create]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const metaDir = path.join(root, 'metadata', 'icons');
const nameIndexPath = path.join(root, 'metadata', 'name-index.json');
const schema = JSON.parse(fs.readFileSync(path.join(root, 'schemas', 'icon-metadata.schema.json'), 'utf8'));

const CATEGORIES = schema.properties.categories.items.enum;
const ROLES = ['decorative', 'informative', 'interactive'];
const NAME_RE = new RegExp(schema.properties.name.pattern);
const TAG_RE = new RegExp(schema.properties.tags.items.pattern);
const BANNED_TAGS = ['variant', 'icon', 'primor'];
const REQUIRED_ON_CREATE = ['name', 'displayName', 'description', 'tags', 'categories', 'accessibility'];
const optimizedDir = path.join(root, 'static', 'icons', 'optimized');

let CREATE = false;

// Checks the fields present in a batch entry. "name" is always required;
// the other fields are optional, so a batch can change only names.
function validate(filename, m) {
  const errors = [];
  if (!fs.existsSync(path.join(metaDir, `${filename}.json`))) {
    if (!CREATE) errors.push('no metadata file (use --create for new icons)');
    else if (!fs.existsSync(path.join(optimizedDir, `${filename}.svg`))) errors.push('no SVG in static/icons/optimized/');
    else for (const k of REQUIRED_ON_CREATE) if (!(k in m)) errors.push(`new icon needs "${k}"`);
  }
  if (!NAME_RE.test(m.name || '')) errors.push(`bad name "${m.name}"`);
  if ('description' in m) {
    const d = m.description || '';
    if (d.length < 10 || d.length > 200) errors.push(`description length ${d.length}`);
    if (/\bvariant\b/i.test(d)) errors.push('description says "variant"');
  }
  if ('tags' in m) {
    const tags = m.tags || [];
    if (tags.length < 5 || tags.length > 12) errors.push(`${tags.length} tags (want 5-12)`);
    for (const t of tags) {
      if (!TAG_RE.test(t)) errors.push(`bad tag "${t}"`);
      if (/^\d+$/.test(t) || BANNED_TAGS.includes(t)) errors.push(`banned tag "${t}"`);
    }
    if (new Set(tags).size !== tags.length) errors.push('duplicate tags');
  }
  if ('categories' in m) {
    const cats = m.categories || [];
    if (cats.length < 1 || cats.length > 3) errors.push(`${cats.length} categories`);
    for (const c of cats) if (!CATEGORIES.includes(c)) errors.push(`unknown category "${c}"`);
  }
  if (m.accessibility) {
    if (!ROLES.includes(m.accessibility.role)) errors.push(`bad role "${m.accessibility.role}"`);
    if (!m.accessibility.suggestedLabel) errors.push('missing suggestedLabel');
  }
  return errors;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  CREATE = args.includes('--create');
  const batchPath = args.find((a) => !a.startsWith('--'));
  if (!batchPath) {
    console.log('Usage: node scripts/apply-metadata.js <batch.json> [--dry-run] [--create]');
    process.exit(1);
  }
  const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));

  // Every name and alias in the library after this batch is applied
  const finalNames = new Map();
  const aliasOwners = new Map();
  const existing = fs.readdirSync(metaDir).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
  const created = Object.keys(batch).filter((f) => !existing.includes(f));
  for (const filename of [...existing, ...created]) {
    const current = existing.includes(filename) ? JSON.parse(fs.readFileSync(path.join(metaDir, `${filename}.json`), 'utf8')) : {};
    const entry = { ...current, ...batch[filename] };
    if (!finalNames.has(entry.name)) finalNames.set(entry.name, []);
    finalNames.get(entry.name).push(filename);
    for (const alias of entry.aliases || []) {
      if (!aliasOwners.has(alias)) aliasOwners.set(alias, []);
      aliasOwners.get(alias).push(filename);
    }
  }

  let failed = false;
  for (const [filename, entry] of Object.entries(batch)) {
    const errors = validate(filename, entry);
    const owners = finalNames.get(entry.name) || [];
    if (owners.length > 1) errors.push(`name "${entry.name}" also used by ${owners.filter((o) => o !== filename).join(', ')}`);
    const aliasUsers = (aliasOwners.get(entry.name) || []).filter((o) => o !== filename);
    if (aliasUsers.length) errors.push(`name "${entry.name}" is an alias of ${aliasUsers.join(', ')}`);
    if (errors.length) {
      failed = true;
      console.error(`✗ ${filename}: ${errors.join('; ')}`);
    }
  }
  if (failed) {
    console.error('\nNothing written. Fix the errors above.');
    process.exit(1);
  }

  const nameIndex = JSON.parse(fs.readFileSync(nameIndexPath, 'utf8'));
  const now = new Date().toISOString();
  for (const [filename, entry] of Object.entries(batch)) {
    const file = path.join(metaDir, `${filename}.json`);
    const isNew = !fs.existsSync(file);
    const current = isNew
      ? {
          technical: { viewBox: '0 0 24 24', strokeWidth: 1.5, hasStroke: true, hasFill: false },
          contributors: ['Henrique Ibaldo'],
          version: '1.0.0',
          deprecated: false
        }
      : JSON.parse(fs.readFileSync(file, 'utf8'));
    const oldName = isNew ? '(new)' : current.name;
    // New files list the descriptive fields first, like the existing ones
    const head = isNew ? { ...Object.fromEntries(REQUIRED_ON_CREATE.map((k) => [k, entry[k]])), filename } : {};
    const next = { ...head, ...current, ...entry, filename, namedBy: 'claude-code', updatedAt: now };
    if (!dryRun) fs.writeFileSync(file, JSON.stringify(next, null, 2) + '\n', 'utf8');
    // A file has exactly one name: drop every older key that points to it
    for (const [key, file] of Object.entries(nameIndex)) {
      if (file === `${filename}.svg` && key !== entry.name) delete nameIndex[key];
    }
    nameIndex[entry.name] = `${filename}.svg`;
    console.log(`${oldName.padEnd(28)} → ${entry.name}`);
  }
  if (!dryRun) {
    fs.writeFileSync(nameIndexPath, JSON.stringify(nameIndex, null, 2) + '\n', 'utf8');
  }
  console.log(`\n${dryRun ? 'Dry run: would update' : 'Updated'} ${Object.keys(batch).length} icons.`);
}

main();
