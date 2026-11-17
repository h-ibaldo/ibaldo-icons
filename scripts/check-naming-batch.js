#!/usr/bin/env node

/**
 * Check a naming batch for NEW icons before they are imported.
 *
 * Batch format: { "<source id>": { name, displayName, description, tags,
 * categories, accessibility: { role, suggestedLabel }, hold? } }
 * The key is the source id (e.g. "old-icon-set-1-p0001"); the final filename
 * is the kebab-case of the name. Entries with "hold": "<reason>" are kept out
 * of the import and listed for review.
 *
 * Checks every entry's fields (same rules as apply-metadata.js) and that each
 * name, and its kebab filename, is unique within the batch, against the
 * library (names and aliases in metadata/icons/) and against the other
 * import batches in metadata/naming/*-import-*.json that are not applied yet.
 *
 * Usage:
 *   node scripts/check-naming-batch.js <batch.json> [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const metaDir = path.join(root, 'metadata', 'icons');
const namingDir = path.join(root, 'metadata', 'naming');
const optimizedDir = path.join(root, 'static', 'icons', 'optimized');
const schema = JSON.parse(fs.readFileSync(path.join(root, 'schemas', 'icon-metadata.schema.json'), 'utf8'));

const CATEGORIES = schema.properties.categories.items.enum;
const ROLES = ['decorative', 'informative', 'interactive'];
const NAME_RE = new RegExp(schema.properties.name.pattern);
const TAG_RE = new RegExp(schema.properties.tags.items.pattern);
const BANNED_TAGS = ['variant', 'icon', 'primor'];
const BANNED_WORDS = /(Alt|Second|New|Variant|Line|Outline|Icon)(?=[A-Z0-9]|$)/;

export const kebab = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase();

function validate(m) {
  const errors = [];
  if (!NAME_RE.test(m.name || '')) errors.push(`bad name "${m.name}"`);
  else if (BANNED_WORDS.test(m.name)) errors.push(`banned word in "${m.name}"`);
  if (!m.displayName) errors.push('no displayName');
  const d = m.description || '';
  if (d.length < 10 || d.length > 200) errors.push(`description length ${d.length}`);
  if (/\bvariant\b/i.test(d)) errors.push('description says "variant"');
  const tags = m.tags || [];
  if (tags.length < 5 || tags.length > 12) errors.push(`${tags.length} tags (want 5-12)`);
  for (const t of tags) {
    if (!TAG_RE.test(t)) errors.push(`bad tag "${t}"`);
    if (/^\d+$/.test(t) || BANNED_TAGS.includes(t)) errors.push(`banned tag "${t}"`);
  }
  if (new Set(tags).size !== tags.length) errors.push('duplicate tags');
  const cats = m.categories || [];
  if (cats.length < 1 || cats.length > 3) errors.push(`${cats.length} categories`);
  for (const c of cats) if (!CATEGORIES.includes(c)) errors.push(`unknown category "${c}"`);
  if (!m.accessibility || !ROLES.includes(m.accessibility.role)) errors.push('bad accessibility.role');
  else if (!m.accessibility.suggestedLabel) errors.push('missing suggestedLabel');
  return errors;
}

function main() {
  const args = process.argv.slice(2);
  const batchPath = args.find((a) => !a.startsWith('--'));
  const quiet = args.includes('--quiet');
  if (!batchPath) {
    console.log('Usage: node scripts/check-naming-batch.js <batch.json> [--quiet]');
    process.exit(1);
  }
  const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));

  // name -> where it is taken
  const taken = new Map();
  const take = (name, where) => {
    if (!taken.has(name)) taken.set(name, []);
    taken.get(name).push(where);
  };
  for (const f of fs.readdirSync(metaDir).filter((f) => f.endsWith('.json'))) {
    const m = JSON.parse(fs.readFileSync(path.join(metaDir, f), 'utf8'));
    take(m.name, `library ${f.slice(0, -5)}`);
    for (const a of m.aliases || []) take(a, `alias of ${f.slice(0, -5)}`);
  }
  for (const f of fs.readdirSync(namingDir).filter((f) => /-import-.*\.json$/.test(f))) {
    if (path.resolve(namingDir, f) === path.resolve(batchPath)) continue;
    const other = JSON.parse(fs.readFileSync(path.join(namingDir, f), 'utf8'));
    for (const [key, e] of Object.entries(other)) {
      if (fs.existsSync(path.join(metaDir, `${key}.json`))) continue; // already applied
      if (e && e.name && !e.hold) take(e.name, `batch ${f}`);
    }
  }

  const inBatch = new Map();
  const files = new Map();
  let errorsCount = 0;
  let held = 0;
  for (const [key, e] of Object.entries(batch)) {
    const errors = validate(e);
    if (e.hold) held++;
    if (!e.hold) {
      if (inBatch.has(e.name)) errors.push(`name also used by ${inBatch.get(e.name)} in this batch`);
      inBatch.set(e.name, key);
      const where = taken.get(e.name);
      if (where) errors.push(`name taken: ${where.join(', ')}`);
      const file = kebab(e.name || '');
      if (files.has(file)) errors.push(`filename ${file} also from ${files.get(file)}`);
      files.set(file, key);
      if (fs.existsSync(path.join(optimizedDir, `${file}.svg`))) errors.push(`file ${file}.svg exists`);
    }
    if (errors.length) {
      errorsCount++;
      if (!quiet || errorsCount <= 30) console.error(`✗ ${key} (${e.name}): ${errors.join('; ')}`);
    }
  }
  const total = Object.keys(batch).length;
  console.log(`${total} entries, ${total - held} to import, ${held} on hold, ${errorsCount} with errors`);
  if (errorsCount) process.exit(1);
}

main();
