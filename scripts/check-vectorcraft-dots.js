#!/usr/bin/env node

/**
 * Hard check: every dot drawn in a VectorCraft source must reach the library.
 *
 * For each imported page of a set, it counts:
 *   source   dots in the native drawing (same detection as import-vectorcraft-dots.js)
 *   raw      zero-length subpaths in src/icons/raw/<set>/<file>.svg
 *   opt      the same in static/icons/optimized/<file>.svg
 *   react / svelte / vue / rn   the same in each built package component
 *   mcp      the same in the MCP's minified SVG (src/lib/server/mcp/core.js cleanSvg)
 * and fails (exit 1) on any icon where the counts differ.
 *
 * A dot is a subpath whose points all sit on one spot, written as "Mx yLx y"
 * (any spacing). Run after `npm run build:icons:all`.
 *
 * Usage:
 *   node scripts/check-vectorcraft-dots.js <file.vectorcraft> <set> <batch.json> [--list]
 *   --list prints every dotted icon with its counts.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readVectorCraftDocument, findDots } from './import-vectorcraft-dots.js';
import { cleanSvg } from '../src/lib/server/mcp/core.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const kebab = (n) => n.replace(/([a-z])([0-9]+[A-Z])/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([0-9])([A-Z][a-z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase();
const NUM = '(-?\\d*\\.?\\d+(?:e[-+]?\\d+)?)';
const DOT = new RegExp(`M\\s*${NUM}[\\s,]+${NUM}\\s*L\\s*${NUM}[\\s,]+${NUM}(?![\\d.])`, 'g');

/** Count "Mx yLx y" subpaths whose two points are the same. */
export function countDots(text) {
  let n = 0;
  for (const m of text.matchAll(DOT)) {
    const [x1, y1, x2, y2] = m.slice(1, 5).map(Number);
    if (Math.abs(x1 - x2) < 1e-3 && Math.abs(y1 - y2) < 1e-3) n++;
  }
  return n;
}

const args = process.argv.slice(2);
const list = args.includes('--list');
const [source, set, batchPath] = args.filter((a) => !a.startsWith('--'));
if (!source || !set || !batchPath) {
  console.log('Usage: node scripts/check-vectorcraft-dots.js <file.vectorcraft> <set> <batch.json> [--list]');
  process.exit(1);
}

const { pages } = findDots(readVectorCraftDocument(source));
const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
const metaByFile = {};
for (const f of fs.readdirSync(path.join(root, 'metadata', 'icons'))) {
  const m = JSON.parse(fs.readFileSync(path.join(root, 'metadata', 'icons', f), 'utf8'));
  metaByFile[m.filename] = m.name;
}
const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null);

let srcTotal = 0, libTotal = 0, dotted = 0, heldDots = 0;
const bad = [];
const rows = [];
for (const [id, e] of Object.entries(batch)) {
  const page = Number(id.match(/-p(\d{4})$/)?.[1]);
  if (!page || !id.startsWith(`${set}-p`)) continue;
  const src = (pages.get(page) || []).length;
  if (e.hold) { heldDots += src; continue; }
  const file = kebab(e.name);
  const name = metaByFile[file];
  const raw = read(path.join(root, 'src', 'icons', 'raw', set, `${file}.svg`));
  const opt = read(path.join(root, 'static', 'icons', 'optimized', `${file}.svg`));
  const pkg = (p) => read(path.join(root, 'packages', p));
  const counts = {
    source: src,
    raw: raw === null ? -1 : countDots(raw),
    opt: opt === null ? -1 : countDots(opt),
    mcp: opt === null ? -1 : countDots(cleanSvg(opt)),
    react: countDots(pkg(`icon-design-react/dist/esm/icons/${name}.js`) ?? '') ,
    svelte: countDots(pkg(`icon-design-svelte/dist/icons/${name}.svelte`) ?? ''),
    vue: countDots(pkg(`icon-design-vue/dist/esm/icons/${name}.js`) ?? ''),
    rn: countDots(pkg(`icon-design-react-native/dist/esm/icons/${name}.js`) ?? '')
  };
  srcTotal += src;
  libTotal += Math.max(counts.raw, 0);
  if (src) dotted++;
  const vals = Object.values(counts);
  if (vals.some((v) => v !== src)) bad.push([id, name ?? file, counts]);
  if (src || counts.raw > 0) rows.push([id, name ?? file, counts]);
}

if (list) for (const [id, name, c] of rows) console.log(`${id}  ${name}  ${JSON.stringify(c)}`);
console.log(`${set}: ${srcTotal} dots in the source (${dotted} icons), ${libTotal} in the library, ${bad.length} icons with a mismatch.` + (heldDots ? ` (${heldDots} more dots on held pages, not imported.)` : ''));
for (const [id, name, c] of bad) console.log(`  ✗ ${id} ${name} ${JSON.stringify(c)}`);
process.exit(bad.length ? 1 : 0);
