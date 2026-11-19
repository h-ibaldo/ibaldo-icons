"""Extract every icon-sized drawing from an AI private-data dump (p.txt in cwd),
inside or outside artboards, into svg/<n>.svg (24x24 frame centered on it)."""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

lines = open('p.txt', encoding='latin-1').read().split('\n')
start = next(i for i, l in enumerate(lines) if l.startswith('%AI5_BeginLayer'))
paths, cur, width = [], None, 1.0
for l in lines[start:]:
    if l.startswith('%'): continue
    t = l.split()
    if not t: continue
    op, vals = t[-1], t[:-1]
    try: nums = [float(v) for v in vals]
    except ValueError:
        m = re.search(r'(-?\d*\.?\d+) w\b', l)
        if m: width = float(m.group(1))
        continue
    if op == 'm' and len(nums) == 2: cur = {'segs': [('M', nums)], 'w': width}
    elif op in 'lL' and len(nums) == 2 and cur: cur['segs'].append(('L', nums))
    elif op in 'cC' and len(nums) == 6 and cur: cur['segs'].append(('C', nums))
    elif op in 'vV' and len(nums) == 4 and cur:
        p = cur['segs'][-1][1][-2:]; cur['segs'].append(('C', [p[0], p[1]] + nums))
    elif op in 'yY' and len(nums) == 4 and cur: cur['segs'].append(('C', nums + nums[2:4]))
    elif op in ('S', 's') and not nums and cur:
        cur['closed'] = op == 's'; paths.append(cur); cur = None
    elif op in ('f', 'F', 'b', 'B', 'N', 'n') and not nums: cur = None
    elif op == 'w' and len(nums) == 1: width = nums[0]

for p in paths:
    xs = [v for _, n in p['segs'] for v in n[0::2]]; ys = [v for _, n in p['segs'] for v in n[1::2]]
    p['bb'] = [min(xs), min(ys), max(xs), max(ys)]

# 1) cluster by bbox proximity (icons sit >= ~16pt apart on the grids)
M = 2.5
parent = list(range(len(paths)))
def find(a):
    while parent[a] != a: parent[a] = parent[parent[a]]; a = parent[a]
    return a
order = sorted(range(len(paths)), key=lambda i: paths[i]['bb'][0])
for k, i in enumerate(order):
    a = paths[i]['bb']
    for j in order[k + 1:]:
        b = paths[j]['bb']
        if b[0] > a[2] + M: break
        if b[1] <= a[3] + M and a[1] <= b[3] + M: parent[find(i)] = find(j)
groups = {}
for i in range(len(paths)): groups.setdefault(find(i), []).append(i)
cl = []
for g in groups.values():
    bb = [min(paths[i]['bb'][0] for i in g), min(paths[i]['bb'][1] for i in g),
          max(paths[i]['bb'][2] for i in g), max(paths[i]['bb'][3] for i in g)]
    cl.append({'bb': bb, 'idx': g})
# 2) frames from icon-sized clusters; small bits join the frame they fall in
big = [c for c in cl if max(c['bb'][2] - c['bb'][0], c['bb'][3] - c['bb'][1]) >= 9 and max(c['bb'][2] - c['bb'][0], c['bb'][3] - c['bb'][1]) <= 23]
frames = []
for c in big:
    b = c['bb']; fx, fy = round((b[0] + b[2]) / 2 - 12), round((b[1] + b[3]) / 2 - 12)
    frames.append({'x': fx, 'y': fy, 'idx': list(c['idx'])})
for c in cl:
    if c in big: continue
    w = max(c['bb'][2] - c['bb'][0], c['bb'][3] - c['bb'][1])
    if w > 23: continue
    cx, cy = (c['bb'][0] + c['bb'][2]) / 2, (c['bb'][1] + c['bb'][3]) / 2
    for f in frames:
        if f['x'] + 1 <= cx <= f['x'] + 23 and f['y'] + 1 <= cy <= f['y'] + 23:
            f['idx'] += c['idx']; break

def fmt(v):
    r = round(v * 1000) / 1000
    return '0' if r == 0 else '%g' % r
os.makedirs('svg', exist_ok=True)
for f in os.listdir('svg'): os.remove(os.path.join('svg', f))
A = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"'
for n, f in enumerate(frames):
    out = []
    for i in f['idx']:
        p = paths[i]; d = ''
        for op, nums in p['segs']:
            d += op + ' '.join(fmt(nums[k] - f['x']) + ' ' + fmt(f['y'] + 24 - nums[k + 1]) for k in range(0, len(nums), 2))
        if p.get('closed'): d += 'Z'
        out.append(f'  <path d="{d}" {A}/>')
    open(f'svg/x{n:04d}_{f["x"]}_{f["y"]}.svg', 'w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n' + '\n'.join(out) + '\n</svg>\n')
print(len(paths), 'paths', len(frames), 'icons')
