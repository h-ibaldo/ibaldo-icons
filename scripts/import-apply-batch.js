#!/usr/bin/env node

/**
 * Import a named set: copy each cleaned SVG to src/icons/raw/<set>/<kebab-name>.svg
 * and create its metadata, from a naming batch keyed by source id.
 *
 * Run check-naming-batch.js first. Entries with "hold" are skipped.
 * After this: npm run build:icons (optimizes into static/icons/optimized/,
 * rebuilds packages and index).
 *
 * Usage:
 *   node scripts/import-apply-batch.js <batch.json> <cleaned-dir> <set> [--dry-run]
 *   (cleaned-dir holds <source id>.svg files from import-clean-svg.js)
 */

import fs from 'fs';
import os from 'os';
import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const kebab = (n) => n.replace(/([a-z])([0-9]+[A-Z])/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([0-9])([A-Z][a-z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase();

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const [batchPath, cleanedDir, set] = args.filter((a) => !a.startsWith('--'));
if (!batchPath || !cleanedDir || !set) {
  console.log('Usage: node scripts/import-apply-batch.js <batch.json> <cleaned-dir> <set> [--dry-run]');
  process.exit(1);
}

execFileSync('node', [path.join(root, 'scripts', 'check-naming-batch.js'), batchPath, '--quiet'], { stdio: 'inherit' });

const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
const keyed = {};
const copies = [];
for (const [id, e] of Object.entries(batch)) {
  if (e.hold) continue;
  const src = path.join(cleanedDir, `${id}.svg`);
  if (!fs.existsSync(src)) throw new Error(`missing ${src}`);
  const file = kebab(e.name);
  const { hold, ...entry } = e;
  keyed[file] = entry;
  copies.push([src, path.join(root, 'src', 'icons', 'raw', set, `${file}.svg`)]);
}

const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'import-')), 'batch.json');
fs.writeFileSync(tmp, JSON.stringify(keyed, null, 2));

if (dryRun) {
  console.log(`Dry run: would copy ${copies.length} SVGs into src/icons/raw/${set}/ and create their metadata.`);
  process.exit(0);
}

// The SVG must exist in static/icons/optimized/ for apply-metadata --create,
// so copy raw files and optimize them first (same optimizer as build-icons).
const { optimizeSVGSafe } = await import('./optimize-svg-safe.js');
fs.mkdirSync(path.join(root, 'src', 'icons', 'raw', set), { recursive: true });
for (const [src, dest] of copies) {
  fs.copyFileSync(src, dest);
  const optimized = optimizeSVGSafe(fs.readFileSync(dest, 'utf8'));
  fs.writeFileSync(path.join(root, 'static', 'icons', 'optimized', path.basename(dest)), optimized, 'utf8');
}
execFileSync('node', [path.join(root, 'scripts', 'apply-metadata.js'), tmp, '--create'], { stdio: ['ignore', 'ignore', 'inherit'] });
console.log(`Imported ${copies.length} icons into src/icons/raw/${set}/ (${Object.keys(batch).length - copies.length} on hold).`);
