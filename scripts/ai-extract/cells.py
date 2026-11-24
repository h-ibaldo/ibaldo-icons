"""Cut the parsed art (clusters.json) into 24x24 icons on the artboard grid
and write library-format SVGs into ./svg (names: set6-<block>-r<row>-c<col>)."""
import json, os, math
from collections import defaultdict

C = json.load(open('clusters.json'))
paths = [p for c in C for p in c['paths']]
PITCH = 44
# Block A: first artboard at x=-1507, rows y0 = -264 down to -484 (y up)
# Block B: one long row at y0=1544, x frames = 35 mod 44
blocks = [
    ('a', lambda y: any(abs(y - r) < 1e-6 for r in [-264, -308, -352, -396, -440, -484]), 33, [-264, -308, -352, -396, -440, -484]),
    ('b', None, 35, [1544]),
]

def center(p):
    xs = [v for _, n in p['segs'] for v in n[0::2]]
    ys = [v for _, n in p['segs'] for v in n[1::2]]
    return (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2

cells = defaultdict(list)
left = []
for p in paths:
    cx, cy = center(p)
    placed = False
    for name, _, xmod, rows in blocks:
        for r in rows:
            if r - 0.5 <= cy <= r + 24.5:
                k = math.floor((cx - xmod) / PITCH)
                x0 = xmod + PITCH * k
                if x0 - 0.5 <= cx <= x0 + 24.5:
                    cells[(name, r, x0)].append(p)
                    placed = True
                    break
        if placed: break
    if not placed:
        left.append(p)

# leftovers: cluster again and center each cluster in its own frame
lc = defaultdict(list)
for c in C:
    ps = [p for p in c['paths'] if any(p is q for q in left)]
    if ps:
        b = c['bb']
        lc[('z', round((b[1] + b[3]) / 2 - 12), round((b[0] + b[2]) / 2 - 12))] = ps

def fmt(v):
    r = round(v * 1000) / 1000
    return '0' if r == 0 else ('%g' % r)

os.makedirs('svg', exist_ok=True)
for f in os.listdir('svg'): os.remove(os.path.join('svg', f))
ATTR = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"'
written = []
def write(key, ps, x0, y0, name):
    out = []
    for p in ps:
        d = ''
        for op, n in p['segs']:
            pts = [(n[i] - x0, (y0 + 24) - n[i + 1]) for i in range(0, len(n), 2)]
            d += op + ' '.join(fmt(x) + ' ' + fmt(y) for x, y in pts)
        if p.get('closed'): d += 'Z'
        out.append(f'  <path d="{d}" {ATTR}/>')
    open(f'svg/{name}.svg', 'w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n' + '\n'.join(out) + '\n</svg>\n')
    written.append(name)

for (blk, r, x0), ps in cells.items():
    rows = next(b[3] for b in blocks if b[0] == blk)
    xmin = min(k[2] for k in cells if k[0] == blk)
    write(None, ps, x0, r, f'set6-{blk}-r{rows.index(r) + 1:02d}-c{(x0 - xmin) // PITCH + 1:03d}')
for (blk, y0, x0), ps in lc.items():
    write(None, ps, x0, y0, f'set6-z-y{y0}-x{x0}')
print('cells', len(cells), 'leftover icons', len(lc), 'leftover paths', len(left))
