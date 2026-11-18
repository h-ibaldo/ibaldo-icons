#!/usr/bin/env node

/**
 * Contact sheet generator
 *
 * Renders a grid of icons into PNG images so a person (or Claude) can look at
 * many icons at once while naming them. Each cell shows the icon and its
 * filename.
 *
 * Usage:
 *   node scripts/contact-sheet.js <out-dir> <svg-file-or-glob-prefix>...
 *
 * Examples:
 *   node scripts/contact-sheet.js /tmp/sheets static/icons/optimized/1-user-head
 *   node scripts/contact-sheet.js /tmp/sheets static/icons/optimized/a.svg static/icons/optimized/b.svg
 *
 * A prefix matches every .svg in that folder whose name starts with it.
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// --large: fewer, bigger icons per sheet, for checking small details
const LARGE = process.argv.includes('--large');
const COLS = LARGE ? 4 : 6;
const PER_SHEET = LARGE ? 16 : 36;
const CELL = LARGE ? 300 : 200;
const ICON = LARGE ? 200 : 96;
const STROKE = 1.5;

function collect(inputs) {
  const files = [];
  for (const input of inputs) {
    if (input.endsWith('.svg') && fs.existsSync(input)) {
      files.push(input);
      continue;
    }
    const dir = path.dirname(input);
    const prefix = path.basename(input);
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.svg') && f.startsWith(prefix)) files.push(path.join(dir, f));
    }
  }
  // Natural sort so "-2" comes before "-10"
  return [...new Set(files)].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function innerSvg(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const inner = raw.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  return inner.replace(/currentColor/g, '#111');
}

// --names: label each cell with its component name from metadata/icons/
// instead of the filename, to review names against the drawings.
const NAMES = process.argv.includes('--names');

// --batch <file.json>: label each cell with the name a naming batch gives it
// (batch keyed by the SVG basename), to review names before they are applied.
const BATCH_ARG = process.argv.indexOf('--batch');
const BATCH = BATCH_ARG !== -1 ? JSON.parse(fs.readFileSync(process.argv[BATCH_ARG + 1], 'utf8')) : null;

function labelFor(file) {
  const base = path.basename(file, '.svg');
  if (BATCH) return BATCH[base] ? BATCH[base].name + (BATCH[base].hold ? ' (hold)' : '') : `? ${base}`;
  if (!NAMES) return base;
  const meta = path.join('metadata', 'icons', `${base}.json`);
  return fs.existsSync(meta) ? JSON.parse(fs.readFileSync(meta, 'utf8')).name : `? ${base}`;
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function renderSheet(files, outPath) {
  const rows = Math.ceil(files.length / COLS);
  const width = COLS * CELL;
  const height = rows * CELL;
  const cells = files
    .map((file, i) => {
      const x = (i % COLS) * CELL;
      const y = Math.floor(i / COLS) * CELL;
      const label = escapeXml(labelFor(file));
      return `
  <rect x="${x + 0.5}" y="${y + 0.5}" width="${CELL - 1}" height="${CELL - 1}" fill="#fff" stroke="#ddd"/>
  <svg x="${x + (CELL - ICON) / 2}" y="${y + (LARGE ? 20 : 24)}" width="${ICON}" height="${ICON}" viewBox="0 0 24 24" fill="none" stroke-width="${STROKE}">${innerSvg(file)}</svg>
  <text x="${x + CELL / 2}" y="${y + CELL - (LARGE ? 30 : 28)}" font-family="Helvetica, Arial, sans-serif" font-size="${Math.min(LARGE ? 18 : 12, Math.floor(((CELL - 8) / label.length) * 1.8))}" text-anchor="middle" fill="#333">${label}</text>`;
    })
    .join('');
  const sheet = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#fff"/>${cells}</svg>`;
  await sharp(Buffer.from(sheet)).png().toFile(outPath);
}

async function main() {
  const [outDir, ...inputs] = process.argv.slice(2).filter((a, i, all) => !a.startsWith('--') && all[i - 1] !== '--batch');
  if (!outDir || inputs.length === 0) {
    console.log('Usage: node scripts/contact-sheet.js <out-dir> <svg-file-or-prefix>...');
    process.exit(1);
  }
  const files = collect(inputs);
  if (files.length === 0) {
    console.error('No SVG files matched.');
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });
  for (let i = 0; i < files.length; i += PER_SHEET) {
    const out = path.join(outDir, `sheet-${String(i / PER_SHEET + 1).padStart(2, '0')}.png`);
    await renderSheet(files.slice(i, i + PER_SHEET), out);
    console.log(out);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
