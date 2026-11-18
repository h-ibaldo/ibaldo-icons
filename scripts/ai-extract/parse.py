"""Parse the main layer art of an Illustrator private-data dump (p.txt) into
paths, cluster them into icons and print a summary (json to clusters.json)."""
import json, re, sys

lines = open('p.txt', encoding='latin-1').read().split('\n')
start = next(i for i, l in enumerate(lines) if l.startswith('%AI5_BeginLayer'))
paths = []  # each: dict(segs=[...], closed, op, width)
cur = None
width = 1.0
num = r'-?\d*\.?\d+(?:e-?\d+)?'
for l in lines[start:]:
    if l.startswith('%'):
        continue
    t = l.split()
    if not t:
        continue
    op = t[-1]
    vals = t[:-1]
    try:
        nums = [float(v) for v in vals]
    except ValueError:
        nums = None
    if op == 'w' and nums is None:
        # e.g. "1 J 1 j 2 w 10 M []0 d"
        m = re.search(r'(' + num + r') w', l)
        if m: width = float(m.group(1))
        continue
    if nums is None:
        m = re.search(r'(' + num + r') w\b', l)
        if m: width = float(m.group(1))
        continue
    if op == 'm' and len(nums) == 2:
        cur = {'segs': [('M', nums)], 'width': width}
    elif op in ('l', 'L') and len(nums) == 2 and cur:
        cur['segs'].append(('L', nums))
    elif op in ('c', 'C') and len(nums) == 6 and cur:
        cur['segs'].append(('C', nums))
    elif op in ('v', 'V') and len(nums) == 4 and cur:
        p = cur['segs'][-1][1][-2:]
        cur['segs'].append(('C', [p[0], p[1]] + nums))
    elif op in ('y', 'Y') and len(nums) == 4 and cur:
        cur['segs'].append(('C', nums + nums[2:4]))
    elif op in ('S', 's', 'f', 'F', 'b', 'B', 'N', 'n') and len(nums) == 0 and cur:
        cur['closed'] = op in ('s', 'f', 'F', 'b', 'B')
        cur['op'] = op
        paths.append(cur)
        cur = None
    elif op == 'w' and len(nums) == 1:
        width = nums[0]

def bbox(p):
    xs = [v for _, n in p['segs'] for v in n[0::2]]
    ys = [v for _, n in p['segs'] for v in n[1::2]]
    return [min(xs), min(ys), max(xs), max(ys)]

from collections import Counter
print('paths', len(paths), Counter(p['op'] for p in paths), Counter(p['width'] for p in paths))
stroked = [p for p in paths if p['op'] in ('S', 's')]
for p in stroked: p['bb'] = bbox(p)

# cluster by bbox overlap (margin 1.5pt)
M = 1.5
parent = list(range(len(stroked)))
def find(a):
    while parent[a] != a:
        parent[a] = parent[parent[a]]; a = parent[a]
    return a
order = sorted(range(len(stroked)), key=lambda i: stroked[i]['bb'][0])
for ii, i in enumerate(order):
    a = stroked[i]['bb']
    for j in order[ii + 1:]:
        b = stroked[j]['bb']
        if b[0] > a[2] + M: break
        if b[1] <= a[3] + M and a[1] <= b[3] + M:
            parent[find(i)] = find(j)
groups = {}
for i in range(len(stroked)): groups.setdefault(find(i), []).append(i)
clusters = []
for g in groups.values():
    bb = [min(stroked[i]['bb'][0] for i in g), min(stroked[i]['bb'][1] for i in g),
          max(stroked[i]['bb'][2] for i in g), max(stroked[i]['bb'][3] for i in g)]
    clusters.append({'bb': bb, 'paths': [stroked[i] for i in g]})
sizes = Counter((round(c['bb'][2] - c['bb'][0]), round(c['bb'][3] - c['bb'][1])) for c in clusters)
print('clusters', len(clusters), 'sizes', sizes.most_common(12))
json.dump(clusters, open('clusters.json', 'w'))
