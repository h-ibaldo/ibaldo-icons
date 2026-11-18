// Moon icon generator (crescent geometry, badges, cuts). Writes library-format
// SVGs into the folder given as argument (default: a temp folder).
// Usage: node scripts/draw-moon-icons.cjs <out-dir>, then compare with src/icons/raw/moon/.
const fs = require('fs');
const path = require('path');
const OUT = process.argv[2] || require('fs').mkdtempSync(require('path').join(require('os').tmpdir(), 'moon-'));
fs.mkdirSync(OUT, { recursive: true });

const f = (n) => { const r = Math.round(n * 1000) / 1000; return Object.is(r, -0) ? '0' : String(r); };
const ATTR = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"';
const svg = (paths) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n${paths.map((d) => `  <path d="${d}" ${ATTR}/>`).join('\n')}\n</svg>\n`;
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

// Pieces of a circle where keep(p) is true, as SVG arc subpaths
function arcPieces(c, r, keep) {
  const N = 1440;
  const pt = (t) => [c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)];
  const ok = [];
  for (let i = 0; i < N; i++) ok.push(keep(pt((i / N) * 2 * Math.PI)));
  if (ok.every(Boolean)) {
    return [`M${f(c[0] + r)} ${f(c[1])}A${f(r)} ${f(r)} 0 1 1 ${f(c[0] - r)} ${f(c[1])}A${f(r)} ${f(r)} 0 1 1 ${f(c[0] + r)} ${f(c[1])}Z`];
  }
  // rotate so we start at a "false" sample
  const s0 = ok.indexOf(false);
  const refine = (a, b) => { // a kept, b not (angles), find boundary
    for (let k = 0; k < 40; k++) { const m = (a + b) / 2; if (keep(pt(m))) a = m; else b = m; }
    return a;
  };
  const step = (2 * Math.PI) / N;
  const out = [];
  let i = 0;
  while (i < N) {
    const idx = (s0 + i) % N;
    if (ok[idx]) {
      let j = i;
      while (j < N && ok[(s0 + j) % N]) j++;
      const tStart = refine(((s0 + i) * step), ((s0 + i - 1) * step));
      const tEnd = refine(((s0 + j - 1) * step), ((s0 + j) * step));
      let sweepAngle = tEnd - tStart;
      while (sweepAngle < 0) sweepAngle += 2 * Math.PI;
      const a = pt(tStart), b = pt(tEnd);
      const large = sweepAngle > Math.PI ? 1 : 0;
      out.push(`M${f(a[0])} ${f(a[1])}A${f(r)} ${f(r)} 0 ${large} 1 ${f(b[0])} ${f(b[1])}`);
      i = j;
    } else i++;
  }
  return out;
}

// Crescent = outer circle O minus inner circle I. `cut(p)` = true where the
// outline must be removed (gap around a badge or a slash).
function crescent({ co, r1, ci, r2 }, cut = () => false) {
  const outer = arcPieces(co, r1, (p) => dist(p, ci) >= r2 && !cut(p));
  const inner = arcPieces(ci, r2, (p) => dist(p, co) <= r1 && !cut(p));
  return [...outer, ...inner];
}
const scaleMoon = (m, s, dx, dy) => ({
  co: [m.co[0] * s + dx, m.co[1] * s + dy], r1: m.r1 * s,
  ci: [m.ci[0] * s + dx, m.ci[1] * s + dy], r2: m.r2 * s
});

// Base crescent, opening to the upper right (room for badges there)
const BASE = { co: [11, 13], r1: 9, ci: [17, 7], r2: 8 };

// Bounding box of the crescent (sampled), to center the plain moon
function bbox(m) {
  let x0 = 99, y0 = 99, x1 = -99, y1 = -99;
  for (let i = 0; i < 4000; i++) {
    const t = (i / 4000) * 2 * Math.PI;
    for (const [c, r, other, inside] of [[m.co, m.r1, m.ci, false], [m.ci, m.r2, m.co, true]]) {
      const p = [c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)];
      const d = dist(p, other);
      if (inside ? d <= m.r1 : d >= m.r2) { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); }
    }
  }
  return { x0, y0, x1, y1 };
}
function centered(m, size) { // scale to `size` (largest side) and center in the 24 grid
  const b = bbox(m);
  const s = size / Math.max(b.x1 - b.x0, b.y1 - b.y0);
  const w = (b.x1 - b.x0) * s, h = (b.y1 - b.y0) * s;
  return scaleMoon(m, s, 12 - w / 2 - b.x0 * s, 12 - h / 2 - b.y0 * s);
}

const circle = (c, r) => `M${f(c[0] + r)} ${f(c[1])}A${f(r)} ${f(r)} 0 1 1 ${f(c[0] - r)} ${f(c[1])}A${f(r)} ${f(r)} 0 1 1 ${f(c[0] + r)} ${f(c[1])}Z`;
function star5(c, ro, ri) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const t = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 ? ri : ro;
    pts.push([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]);
  }
  return 'M' + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join('L') + 'Z';
}
function sparkle(c, r) { // 4-point star with curved sides
  const [x, y] = c, k = 0.18 * r;
  return `M${f(x)} ${f(y - r)}Q${f(x + k)} ${f(y - k)} ${f(x + r)} ${f(y)}Q${f(x + k)} ${f(y + k)} ${f(x)} ${f(y + r)}Q${f(x - k)} ${f(y + k)} ${f(x - r)} ${f(y)}Q${f(x - k)} ${f(y - k)} ${f(x)} ${f(y - r)}Z`;
}
const zee = (x, y, w, h) => `M${f(x)} ${f(y)}L${f(x + w)} ${f(y)}L${f(x)} ${f(y + h)}L${f(x + w)} ${f(y + h)}`;
const square = 'M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z';

const MOON = centered(BASE, 19);
const icons = {
  moon: crescent(MOON),
  'moon-star': [...crescent(BASE), star5([17.5, 6.8], 4, 1.8)],
  'moon-sparkles': [...crescent(BASE), sparkle([16.5, 8], 3), sparkle([20.5, 3.5], 1.5)],
  'moon-clock': [...crescent(BASE, (p) => dist(p, [17.5, 6.5]) < 6.5), circle([17.5, 6.5], 4.5), 'M17.5 4.5L17.5 6.5L19 7.5'],
  'moon-snooze': [...crescent(BASE), zee(14.5, 7, 4, 4.5), zee(19.5, 2.5, 2.5, 2.5)],
  'moon-off': [
    ...crescent(MOON, (p) => {
      // distance to the slash line from (21,3) to (3,21): x + y = 24
      return Math.abs(p[0] + p[1] - 24) / Math.SQRT2 < 2.5;
    }),
    'M21 3L3 21'
  ],
  'moon-circle': [circle([12, 12], 10), ...crescent(centered(BASE, 11))],
  'moon-square': [square, ...crescent(centered(BASE, 11))],
  'moon-full': [circle([12, 12], 9.5), circle([9, 9], 2), circle([15, 14.5], 1.5), circle([9.5, 16], 1.25)]
};

for (const [name, paths] of Object.entries(icons)) fs.writeFileSync(path.join(OUT, `${name}.svg`), svg(paths));
console.log(Object.keys(icons).length, 'icons', JSON.stringify(bbox(MOON)));
