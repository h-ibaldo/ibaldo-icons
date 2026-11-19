#!/usr/bin/env node

/**
 * Build script for @ibaldo/icons-vue
 *
 * Turns every icon into a Vue 3 component written with render functions
 * (defineComponent + h), so no .vue compilation is needed. Outputs ESM, CJS
 * and TypeScript declarations, plus the old names as deprecated aliases.
 * Names come from metadata/icons/ (scripts/utils/icon-names.cjs), the same as
 * the site and the React/Svelte packages.
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');
const ESM_DIR = path.join(DIST_DIR, 'esm');
const CJS_DIR = path.join(DIST_DIR, 'cjs');
const ESM_ICONS_DIR = path.join(ESM_DIR, 'icons');
const CJS_ICONS_DIR = path.join(CJS_DIR, 'icons');
const DTS_ICONS_DIR = path.join(DIST_DIR, 'icons');

// Paint attributes live on the root <svg> only, so the props win
const INHERITED_ATTRS = new Set(['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']);

// Parse the inside of an <svg> into { tag, attrs, children } (simple shapes only)
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
    const attrs = {};
    for (const [, name, value] of rawAttrs.matchAll(/([a-zA-Z][\w:-]*)="([^"]*)"/g)) {
      if (INHERITED_ATTRS.has(name) || name === 'id' || name.startsWith('data-')) continue;
      attrs[name] = value; // Vue passes SVG attributes through as written (kebab-case)
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

function emitChildren(nodes, indent) {
  return nodes
    .map((n) => {
      const kids = n.children.length ? `, [\n${emitChildren(n.children, indent + '  ')}\n${indent}]` : '';
      return `${indent}h('${n.tag}', ${JSON.stringify(n.attrs)}${kids})`;
    })
    .join(',\n');
}

// Extra attributes (class, style, aria-*, listeners) fall through to the <svg>
function componentBody(name, svg) {
  return `const ${name} = defineComponent({
  name: '${name}',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '${svg.viewBox}',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
${emitChildren(svg.children, '          ')}
        ]
      );
  }
});
`;
}

const esmComponent = (name, svg) => `import { defineComponent, h } from 'vue';

${componentBody(name, svg)}
export default ${name};
export { ${name} };
`;

const cjsComponent = (name, svg) => `'use strict';

const { defineComponent, h } = require('vue');

${componentBody(name, svg)}
module.exports = ${name};
module.exports.${name} = ${name};
module.exports.default = ${name};
`;

const dtsComponent = (name) => `import type { DefineComponent } from 'vue';

export interface ${name}Props {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ${name}: DefineComponent<${name}Props>;

export default ${name};
export { ${name} };
`;

function build() {
  console.log('🎨 Building @ibaldo/icons-vue...\n');

  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  for (const dir of [ESM_ICONS_DIR, CJS_ICONS_DIR, DTS_ICONS_DIR]) fs.mkdirSync(dir, { recursive: true });

  const { loadIconNames } = require('../../../scripts/utils/icon-names.cjs');
  const { icons, aliases } = loadIconNames();
  console.log(`📁 Found ${icons.length} icons in static/icons/optimized/\n`);

  const built = [];
  for (const icon of icons) {
    const svg = parseSVG(fs.readFileSync(icon.file, 'utf-8'));
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
  // dist/esm is ES modules even though the package is CommonJS
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

  console.log(`✅ Built ${built.length} Vue components (+ ${liveAliases.length} deprecated aliases)`);
  console.log('📖 Example usage:\n');
  console.log("   import { AvatarFaceTopKnot } from '@ibaldo/icons-vue';");
  console.log('   <AvatarFaceTopKnot :size="32" color="#333" :stroke-width="2" />\n');
}

build();
