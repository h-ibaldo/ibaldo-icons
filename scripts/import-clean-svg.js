#!/usr/bin/env node

/**
 * Clean pdftocairo SVG exports into the library format.
 *
 * The ICONS-import exports (pdftocairo -svg) look like this:
 *   <svg width="24pt" height="24pt" viewBox="0 0 24 24">
 *     <path fill="none" stroke-width="2" ... stroke="rgb(0%, 0%, 0%)"
 *           d="M 0 0 L 0 -8 " transform="matrix(1, 0, 0, -1, 8, 8)"/>
 *
 * This script:
 * - flattens each path's transform matrix into the path data (absolute
 *   M/L/C/Z only, which is all pdftocairo writes; anything else is an error),
 * - rounds coordinates to 3 decimals and drops the dangling "M x y" that
 *   pdftocairo appends after Z,
 * - writes each shape with fill="none" stroke="currentColor"
 *   stroke-linecap="round" stroke-linejoin="round" (plus stroke-dasharray
 *   for dotted lines) and nothing else
 *   (no stroke-width, opacity, miterlimit, pt units or groups),
 * - refuses files with fills, opacity < 1, groups, masks or clips, so
 *   surprises are reported instead of silently dropped.
 *
 * Usage:
 *   node scripts/import-clean-svg.js <out-dir> <input.svg>...
 *   node scripts/import-clean-svg.js <out-dir> --map map.json
 *     (map.json: { "input/path.svg": "output-name", ... })
 */

import fs from 'fs';
import path from 'path';

const ROUND = 1000;

function fmt(n) {
  const r = Math.round(n * ROUND) / ROUND;
  return Object.is(r, -0) ? '0' : String(r);
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? m[1] : null;
}

function parseMatrix(t) {
  if (!t) return [1, 0, 0, 1, 0, 0];
  const m = t.match(/^matrix\(([^)]*)\)$/);
  if (!m) throw new Error(`unsupported transform "${t}"`);
  const v = m[1].split(/[\s,]+/).filter(Boolean).map(Number);
  if (v.length !== 6 || v.some(Number.isNaN)) throw new Error(`bad matrix "${t}"`);
  return v;
}

function transformPath(d, [a, b, c, dd, e, f]) {
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e[-+]?\d+)?/g) || [];
  const out = [];
  let i = 0;
  const pt = () => {
    const x = Number(tokens[i++]);
    const y = Number(tokens[i++]);
    return `${fmt(a * x + c * y + e)} ${fmt(b * x + dd * y + f)}`;
  };
  while (i < tokens.length) {
    const cmd = tokens[i++];
    if (cmd === 'M' || cmd === 'L') out.push(`${cmd}${pt()}`);
    else if (cmd === 'C') out.push(`C${pt()} ${pt()} ${pt()}`);
    else if (cmd === 'Z') out.push('Z');
    else throw new Error(`unsupported path command "${cmd}"`);
  }
  // pdftocairo ends closed subpaths with "Z M x y": a moveto with nothing after it
  while (out.length && out[out.length - 1].startsWith('M')) out.pop();
  return out.join('');
}

export function cleanSvg(raw) {
  if (/<(g|mask|clipPath|use|image|text)\b/.test(raw)) throw new Error('has groups, masks, clips or other non-path elements');
  const shapes = raw.match(/<(path|line|polyline|polygon|circle|ellipse|rect)\b[^>]*>/g) || [];
  if (!shapes.length) throw new Error('no shapes');
  const vb = attr(raw.match(/<svg\b[^>]*>/)[0], 'viewBox');
  if (vb !== '0 0 24 24') throw new Error(`viewBox "${vb}"`);
  const body = shapes.map((tag) => {
    if (!tag.startsWith('<path')) throw new Error(`unsupported element ${tag.slice(0, 20)}`);
    const fill = attr(tag, 'fill');
    if (fill && fill !== 'none') throw new Error(`fill "${fill}"`);
    for (const o of ['opacity', 'stroke-opacity', 'fill-opacity']) {
      const v = attr(tag, o);
      if (v !== null && Number(v) < 1) throw new Error(`${o} ${v}`);
    }
    const d = transformPath(attr(tag, 'd'), parseMatrix(attr(tag, 'transform')));
    // Dotted/dashed lines keep their dash pattern (the library has a few, e.g. ".5 3.5")
    const dash = attr(tag, 'stroke-dasharray');
    const dashAttr = dash && dash !== 'none' ? ` stroke-dasharray="${dash.trim().split(/[\s,]+/).join(' ')}"` : '';
    return `  <path d="${d}" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${dashAttr}/>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n${body.join('\n')}\n</svg>\n`;
}

function main() {
  const args = process.argv.slice(2);
  const outDir = args[0];
  let jobs;
  const mapIdx = args.indexOf('--map');
  if (mapIdx !== -1) {
    const map = JSON.parse(fs.readFileSync(args[mapIdx + 1], 'utf8'));
    jobs = Object.entries(map).map(([input, name]) => [input, `${name}.svg`]);
  } else {
    jobs = args.slice(1).map((input) => [input, path.basename(input)]);
  }
  if (!outDir || !jobs.length) {
    console.log('Usage: node scripts/import-clean-svg.js <out-dir> <input.svg>... | --map map.json');
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });
  let failed = 0;
  for (const [input, outName] of jobs) {
    try {
      fs.writeFileSync(path.join(outDir, outName), cleanSvg(fs.readFileSync(input, 'utf8')));
    } catch (err) {
      failed++;
      console.error(`✗ ${input}: ${err.message}`);
    }
  }
  console.log(`Cleaned ${jobs.length - failed}/${jobs.length} into ${outDir}`);
  if (failed) process.exit(1);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
