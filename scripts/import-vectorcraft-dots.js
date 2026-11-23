#!/usr/bin/env node

/**
 * Put back the dots that a VectorCraft file's PDF part leaves out.
 *
 * A dot in VectorCraft is an open subpath whose anchors all sit on the same
 * point (usually two anchors), stroked with a round cap. VectorCraft drops
 * these zero-length subpaths when it writes the PDF stored inside the
 * .vectorcraft file, so pdftocairo (and everything after it) never sees them:
 * the "!" loses its dot, a keyboard loses its keys, and so on.
 *
 * This script reads the native drawing (the JSON before "\n\0VCBLOBS\0"),
 * finds every dot, works out which artboard it is on (artboard N = PDF page N)
 * and adds it to that page's cleaned SVG as
 *   <path d="Mx yLx y" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
 * A zero-length segment with a round cap draws a round dot in browsers and in
 * every icon package. Dots already in the file are left alone, so the script
 * can run again safely.
 *
 * Run it after import-clean-svg.js and before import-apply-batch.js.
 *
 * Usage:
 *   node scripts/import-vectorcraft-dots.js <file.vectorcraft|header.json> <set> <dir> [--batch <batch.json>] [--dry-run]
 *     without --batch: files are <dir>/<set>-pNNNN.svg (cleaned exports)
 *     with --batch:    files are <dir>/<kebab name>.svg, from the batch's "<set>-pNNNN" keys
 *                      (use this to fix icons that are already in src/icons/raw/<set>/)
 */

import fs from 'fs';
import path from 'path';

const kebab = (n) => n.replace(/([a-z])([0-9]+[A-Z])/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2').replace(/([0-9])([A-Z][a-z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').toLowerCase();
const EPS = 1e-3;
const fmt = (n) => {
  const r = Math.round(n * 1000) / 1000;
  return Object.is(r, -0) ? '0' : String(r);
};

export function readVectorCraftDocument(file) {
  const buf = fs.readFileSync(file);
  const text = buf.toString('latin1');
  const end = text.indexOf('\n\0VCBLOBS\0');
  const json = end === -1 ? text : text.slice(0, end);
  const parsed = JSON.parse(Buffer.from(json, 'latin1').toString('utf8'));
  return parsed.document;
}

function strokeOf(node) {
  return (node.appearance?.items || []).find((it) => it.kind === 'stroke' && it.paint?.type !== 'none');
}

/** @returns {Map<number, {x:number,y:number}[]>} page number (1-based) → dots in artboard coordinates */
export function findDots(doc) {
  const boards = doc.artboards.map((a) => a.rect);
  const pages = new Map();
  const outside = [];
  const walk = (node) => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== 'object') return;
    if (node.kind?.type === 'path') {
      const stroke = strokeOf(node);
      for (const sp of node.kind.path.subpaths) {
        const pts = sp.anchors.flatMap((a) => [a.p, a.in, a.out].filter(Boolean));
        const xs = pts.map((p) => p[0]);
        const ys = pts.map((p) => p[1]);
        const zero = Math.max(...xs) - Math.min(...xs) < EPS && Math.max(...ys) - Math.min(...ys) < EPS;
        // One anchor or a butt cap draws nothing, even in VectorCraft
        if (!zero || sp.anchors.length < 2 || !stroke || stroke.cap !== 'Round') continue;
        const [x, y] = pts[0];
        const i = boards.findIndex((r) => x >= r.x0 - 0.01 && x <= r.x1 + 0.01 && y >= r.y0 - 0.01 && y <= r.y1 + 0.01);
        if (i === -1) { outside.push([x, y]); continue; }
        const r = boards[i];
        const scale = 24 / (r.x1 - r.x0);
        if (!pages.has(i + 1)) pages.set(i + 1, []);
        pages.get(i + 1).push({ x: (x - r.x0) * scale, y: (y - r.y0) * scale });
      }
    }
    Object.values(node).forEach(walk);
  };
  walk(doc.layers);
  return { pages, outside };
}

/** Points of zero-length subpaths already in an SVG (absolute M/L/C/Z path data). */
function existingDots(svg) {
  const found = [];
  for (const [, d] of svg.matchAll(/\sd="([^"]*)"/g)) {
    for (const sub of d.split(/(?=M)/)) {
      const nums = (sub.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/g) || []).map(Number);
      if (nums.length < 4) continue;
      const xs = nums.filter((_, i) => i % 2 === 0);
      const ys = nums.filter((_, i) => i % 2 === 1);
      if (Math.max(...xs) - Math.min(...xs) < EPS && Math.max(...ys) - Math.min(...ys) < EPS) found.push([xs[0], ys[0]]);
    }
  }
  return found;
}

export function addDots(svg, dots) {
  const have = existingDots(svg);
  const add = dots.filter((p) => !have.some(([x, y]) => Math.abs(x - p.x) < 0.01 && Math.abs(y - p.y) < 0.01));
  if (!add.length) return { svg, added: 0 };
  const lines = add.map((p) => `  <path d="M${fmt(p.x)} ${fmt(p.y)}L${fmt(p.x)} ${fmt(p.y)}" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>`);
  return { svg: svg.replace(/\n?<\/svg>\s*$/, `\n${lines.join('\n')}\n</svg>\n`), added: add.length };
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const bi = args.indexOf('--batch');
  const batchPath = bi === -1 ? null : args[bi + 1];
  const [source, set, dir] = args.filter((a, i) => !a.startsWith('--') && (bi === -1 || i !== bi + 1));
  if (!source || !set || !dir) {
    console.log('Usage: node scripts/import-vectorcraft-dots.js <file.vectorcraft|header.json> <set> <dir> [--batch <batch.json>] [--dry-run]');
    process.exit(1);
  }
  const doc = source.endsWith('.json') ? JSON.parse(fs.readFileSync(source, 'utf8')).document : readVectorCraftDocument(source);
  const { pages, outside } = findDots(doc);
  const files = new Map();
  if (batchPath) {
    for (const [id, e] of Object.entries(JSON.parse(fs.readFileSync(batchPath, 'utf8')))) {
      const m = id.match(/-p(\d{4})$/);
      if (m && !e.hold && id.startsWith(`${set}-p`)) files.set(Number(m[1]), path.join(dir, `${kebab(e.name)}.svg`));
    }
  }
  let total = 0;
  let touched = 0;
  const skipped = [];
  for (const [page, dots] of [...pages].sort((a, b) => a[0] - b[0])) {
    const file = batchPath ? files.get(page) : path.join(dir, `${set}-p${String(page).padStart(4, '0')}.svg`);
    if (!file || !fs.existsSync(file)) { skipped.push(page); continue; }
    const { svg, added } = addDots(fs.readFileSync(file, 'utf8'), dots);
    if (!added) continue;
    if (!dryRun) fs.writeFileSync(file, svg);
    total += added;
    touched++;
    console.log(`${dryRun ? 'would add' : 'added'} ${added} dot(s) to ${path.relative(process.cwd(), file)} (page ${page})`);
  }
  console.log(`${dryRun ? 'Dry run: ' : ''}${total} dot(s) in ${touched} file(s). Pages with dots but no file here: ${skipped.length ? skipped.join(', ') : 'none'}.`);
  if (outside.length) console.log(`${outside.length} dot(s) outside every artboard (ignored).`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
