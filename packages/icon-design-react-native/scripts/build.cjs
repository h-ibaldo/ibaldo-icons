#!/usr/bin/env node

/**
 * Build script for @ibaldo/icons-react-native
 *
 * Turns every icon into a React Native component drawn with react-native-svg
 * (<Svg>, <Path>, <Circle>, ...). Outputs ESM, CJS and TypeScript
 * declarations, plus the old names as deprecated aliases. Names come from
 * metadata/icons/ (scripts/utils/icon-names.cjs), like the other packages.
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');
const ESM_DIR = path.join(DIST_DIR, 'esm');
const CJS_DIR = path.join(DIST_DIR, 'cjs');
const ESM_ICONS_DIR = path.join(ESM_DIR, 'icons');
const CJS_ICONS_DIR = path.join(CJS_DIR, 'icons');
const DTS_ICONS_DIR = path.join(DIST_DIR, 'icons');

// Paint attributes live on the root <Svg> only, so the props win
const INHERITED_ATTRS = new Set(['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']);

// SVG tag -> react-native-svg component
const COMPONENTS = {
  path: 'Path', line: 'Line', circle: 'Circle', ellipse: 'Ellipse', rect: 'Rect',
  polyline: 'Polyline', polygon: 'Polygon', g: 'G'
};

const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function parseChildren(inner) {
  const root = { children: [] };
  const stack = [root];
  const tagRe = /<(\/?)([a-zA-Z][\w:-]*)([^>]*?)(\/?)>/g;
  let m;
  while ((m = tagRe.exec(inner))) {
    const [, closing, tag, rawAttrs, selfClosing] = m;
    if (closing) {
      stack.pop();
      continue;
    }
    if (!COMPONENTS[tag]) throw new Error(`unsupported element <${tag}>`);
    const attrs = {};
    for (const [, name, value] of rawAttrs.matchAll(/([a-zA-Z][\w:-]*)="([^"]*)"/g)) {
      if (INHERITED_ATTRS.has(name) || name === 'id' || name.startsWith('data-')) continue;
      attrs[kebabToCamel(name)] = value;
    }
    const node = { tag, attrs, children: [] };
    stack[stack.length - 1].children.push(node);
    if (!selfClosing) stack.push(node);
  }
  return root.children;
}

function parseSVG(svgContent) {
  const match = svgContent.replace(/<\?xml[^>]*\?>/gi, '').match(/<svg([^>]*)>([\s\S]*)<\/svg>/i);
  if (!match) return null;
  const viewBox = (match[1].match(/viewBox=["']([^"']*)["']/i) || [])[1] || '0 0 24 24';
  return { viewBox, children: parseChildren(match[2]) };
}

function usedComponents(nodes, set = new Set()) {
  for (const n of nodes) {
    set.add(COMPONENTS[n.tag]);
    usedComponents(n.children, set);
  }
  return [...set].sort();
}

function emitChildren(nodes, indent) {
  return nodes
    .map((n, i) => {
      const props = JSON.stringify({ ...n.attrs, key: String(i) });
      const kids = n.children.length ? `,\n${emitChildren(n.children, indent + '  ')}` : '';
      return `${indent}createElement(${COMPONENTS[n.tag]}, ${props}${kids})`;
    })
    .join(',\n');
}

function componentBody(name, svg) {
  return `const ${name} = forwardRef(function ${name}(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '${svg.viewBox}',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
${emitChildren(svg.children, '    ')}
  );
});

${name}.displayName = '${name}';
`;
}

const esmComponent = (name, svg) => `import { createElement, forwardRef } from 'react';
import Svg, { ${usedComponents(svg.children).join(', ')} } from 'react-native-svg';

${componentBody(name, svg)}
export default ${name};
export { ${name} };
`;

const cjsComponent = (name, svg) => `'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { ${usedComponents(svg.children).join(', ')} } = RNSvg;

${componentBody(name, svg)}
module.exports = ${name};
module.exports.${name} = ${name};
module.exports.default = ${name};
`;

const dtsComponent = (name) => `import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ${name}Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ${name}: ForwardRefExoticComponent<${name}Props & RefAttributes<Svg>>;

export default ${name};
export { ${name} };
`;

function build() {
  console.log('🎨 Building @ibaldo/icons-react-native...\n');

  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  for (const dir of [ESM_ICONS_DIR, CJS_ICONS_DIR, DTS_ICONS_DIR]) fs.mkdirSync(dir, { recursive: true });

  const { loadIconNames } = require('../../../scripts/utils/icon-names.cjs');
  const { icons, aliases } = loadIconNames();
  console.log(`📁 Found ${icons.length} icons in static/icons/optimized/\n`);

  const built = [];
  for (const icon of icons) {
    let svg;
    try {
      svg = parseSVG(fs.readFileSync(icon.file, 'utf-8'));
    } catch (err) {
      console.warn(`⚠️  Skipping ${path.basename(icon.file)} - ${err.message}`);
      continue;
    }
    if (!svg) {
      console.warn(`⚠️  Skipping ${path.basename(icon.file)} - could not parse`);
      continue;
    }
    fs.writeFileSync(path.join(ESM_ICONS_DIR, `${icon.name}.js`), esmComponent(icon.name, svg));
    fs.writeFileSync(path.join(CJS_ICONS_DIR, `${icon.name}.js`), cjsComponent(icon.name, svg));
    fs.writeFileSync(path.join(DTS_ICONS_DIR, `${icon.name}.d.ts`), dtsComponent(icon.name));
    built.push(icon.name);
  }

  // Old names stay exported for one major version (NAMING-GUIDE.md, "Renaming")
  const names = new Set(built);
  const liveAliases = aliases.filter((a) => names.has(a.name));
  const deprecated = (a) => `/** @deprecated Renamed to \`${a.name}\`. This old name will be removed in the next major version. */`;

  fs.writeFileSync(
    path.join(ESM_DIR, 'index.js'),
    built
      .map((n) => `export { ${n} } from './icons/${n}.js';`)
      .concat(liveAliases.map((a) => `export { ${a.name} as ${a.alias} } from './icons/${a.name}.js';`))
      .join('\n') + '\n'
  );
  fs.writeFileSync(path.join(ESM_DIR, 'package.json'), JSON.stringify({ type: 'module' }, null, 2) + '\n');

  fs.writeFileSync(
    path.join(CJS_DIR, 'index.js'),
    `'use strict';

${built.map((n) => `const ${n} = require('./icons/${n}.js');`).join('\n')}

module.exports = {
${built.map((n) => `  ${n}: ${n}.default || ${n},`).join('\n')}
${liveAliases.map((a) => `  ${a.alias}: ${a.name}.default || ${a.name},`).join('\n')}
};
`
  );

  fs.writeFileSync(
    path.join(DIST_DIR, 'index.d.ts'),
    built
      .map((n) => `export { ${n} } from './icons/${n}';`)
      .concat(liveAliases.map((a) => `${deprecated(a)}\nexport declare const ${a.alias}: typeof import('./icons/${a.name}').${a.name};`))
      .join('\n') + '\n'
  );
  fs.writeFileSync(path.join(DTS_ICONS_DIR, 'index.d.ts'), built.map((n) => `export { ${n} } from './${n}';`).join('\n') + '\n');

  console.log(`✅ Built ${built.length} React Native components (+ ${liveAliases.length} deprecated aliases)`);
  console.log('📖 Example usage:\n');
  console.log("   import { AvatarFaceTopKnot } from '@ibaldo/icons-react-native';");
  console.log('   <AvatarFaceTopKnot size={32} color="#333" strokeWidth={2} />\n');
}

build();
