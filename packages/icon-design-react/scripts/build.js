#!/usr/bin/env node

/**
 * Build script for @icon-design/react
 * Converts SVG icons to React components with tree-shaking support
 */

const fs = require('fs');
const path = require('path');

// Paths
const DIST_DIR = path.resolve(__dirname, '../dist');
const ESM_DIR = path.join(DIST_DIR, 'esm');
const CJS_DIR = path.join(DIST_DIR, 'cjs');
const ESM_ICONS_DIR = path.join(ESM_DIR, 'icons');
const CJS_ICONS_DIR = path.join(CJS_DIR, 'icons');

// Paint attributes set once on the root <svg>. Children must not repeat
// them, otherwise the `color` and `strokeWidth` props would be ignored.
const INHERITED_ATTRS = new Set(['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']);

const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/**
 * Parse the inside of an <svg> into a tree of { tag, attrs, children }.
 * Icons only use simple shapes (path, line, circle, g, ...) with no text
 * content, so a small tag parser is enough.
 */
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

// Emit plain JavaScript: nested createElement calls, no JSX
function emitChildren(nodes, indent) {
  return nodes
    .map((n, i) => {
      const props = JSON.stringify({ ...n.attrs, key: String(i) });
      const kids = n.children.length ? `,\n${emitChildren(n.children, indent + '  ')}` : '';
      return `${indent}createElement('${n.tag}', ${props}${kids})`;
    })
    .join(',\n');
}

function componentBody(componentName, svgData) {
  return `const ${componentName} = forwardRef(function ${componentName}(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '${svgData.viewBox}',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
${emitChildren(svgData.children, '    ')}
  );
});

${componentName}.displayName = '${componentName}';
`;
}

function generateESMComponent(componentName, svgData) {
  return `import { createElement, forwardRef } from 'react';

${componentBody(componentName, svgData)}
export default ${componentName};
export { ${componentName} };
`;
}

function generateCJSComponent(componentName, svgData) {
  return `'use strict';

const { createElement, forwardRef } = require('react');

${componentBody(componentName, svgData)}
module.exports = ${componentName};
module.exports.${componentName} = ${componentName};
module.exports.default = ${componentName};
`;
}

// Generate TypeScript declaration
function generateTypeDeclaration(componentName) {
  return `import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ${componentName}Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ${componentName}: ForwardRefExoticComponent<${componentName}Props & RefAttributes<SVGSVGElement>>;

export default ${componentName};
export { ${componentName} };
`;
}

// Main build function
async function build() {
  console.log('🎨 Building @icon-design/react...\n');

  // Clean and create directories
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
  }

  fs.mkdirSync(ESM_ICONS_DIR, { recursive: true });
  fs.mkdirSync(CJS_ICONS_DIR, { recursive: true });
  fs.mkdirSync(path.join(DIST_DIR, 'icons'), { recursive: true });

  // Names come from metadata/icons/ via the shared module, so the package
  // uses exactly the same names as the website (see NAMING-GUIDE.md).
  const { loadIconNames } = require('../../../scripts/utils/icon-names.cjs');
  const { icons, aliases } = loadIconNames();
  console.log(`📁 Found ${icons.length} icons in static/icons/optimized/\n`);

  const components = [];

  for (const icon of icons) {
    const svgPath = icon.file;
    const filename = path.basename(svgPath);
    const componentName = icon.name;

    // Read and parse SVG
    const svgContent = fs.readFileSync(svgPath, 'utf-8');
    const svgData = parseSVG(svgContent);
    
    if (!svgData) {
      console.warn(`⚠️  Skipping ${filename} - could not parse`);
      continue;
    }
    
    // Generate component files
    const esmCode = generateESMComponent(componentName, svgData);
    const cjsCode = generateCJSComponent(componentName, svgData);
    const dtsCode = generateTypeDeclaration(componentName);
    
    // Write ESM
    fs.writeFileSync(
      path.join(ESM_ICONS_DIR, `${componentName}.js`),
      esmCode
    );
    
    // Write CJS
    fs.writeFileSync(
      path.join(CJS_ICONS_DIR, `${componentName}.js`),
      cjsCode
    );
    
    // Write TypeScript declaration
    fs.writeFileSync(
      path.join(DIST_DIR, 'icons', `${componentName}.d.ts`),
      dtsCode
    );
    
    components.push({
      name: componentName,
      filename
    });
  }
  
  // Create icons directory for .d.ts files
  const dtsIconsDir = path.join(DIST_DIR, 'icons');
  if (!fs.existsSync(dtsIconsDir)) {
    fs.mkdirSync(dtsIconsDir, { recursive: true });
  }
  
  // Move .d.ts files to correct location
  for (const comp of components) {
    const srcDts = path.join(DIST_DIR, 'icons', `${comp.name}.d.ts`);
    // Already in correct location
  }
  
  // Generate main index files
  console.log('📦 Generating index files...\n');
  
  // ESM index
  // Old names (metadata "aliases") stay exported for one major version,
  // pointing to the renamed component. See NAMING-GUIDE.md, "Renaming".
  const built = new Set(components.map(c => c.name));
  const liveAliases = aliases.filter(a => built.has(a.name));
  const deprecatedDoc = (a) => `/** @deprecated Renamed to \`${a.name}\`. This old name will be removed in the next major version. */`;

  const esmIndex = components
    .map(c => `export { ${c.name} } from './icons/${c.name}.js';`)
    .concat(liveAliases.map(a => `export { ${a.name} as ${a.alias} } from './icons/${a.name}.js';`))
    .join('\n');
  
  fs.writeFileSync(path.join(ESM_DIR, 'index.js'), esmIndex);

  // The package itself is CommonJS; mark dist/esm as ES modules so Node
  // (not only bundlers) can import it.
  fs.writeFileSync(path.join(ESM_DIR, 'package.json'), JSON.stringify({ type: 'module' }, null, 2) + '\n');
  
  // CJS index
  const cjsIndex = `"use strict";

${components.map(c => `const ${c.name} = require('./icons/${c.name}.js');`).join('\n')}

module.exports = {
${components.map(c => `  ${c.name}: ${c.name}.default || ${c.name},`).join('\n')}
${liveAliases.map(a => `  ${a.alias}: ${a.name}.default || ${a.name},`).join('\n')}
};
`;
  
  fs.writeFileSync(path.join(CJS_DIR, 'index.js'), cjsIndex);
  
  // TypeScript index declaration
  const dtsIndex = components
    .map(c => `export { ${c.name} } from './icons/${c.name}';`)
    .concat(liveAliases.map(a => `${deprecatedDoc(a)}\nexport declare const ${a.alias}: typeof import('./icons/${a.name}').${a.name};`))
    .join('\n');
  
  fs.writeFileSync(path.join(DIST_DIR, 'index.d.ts'), dtsIndex);
  
  // Generate icons index declaration
  const iconsDtsIndex = components
    .map(c => `export { ${c.name} } from './${c.name}';`)
    .join('\n');
  
  fs.writeFileSync(path.join(dtsIconsDir, 'index.d.ts'), iconsDtsIndex);
  
  console.log(`✅ Built ${components.length} React components (+ ${liveAliases.length} deprecated aliases)`);
  console.log(`   📂 ESM: dist/esm/`);
  console.log(`   📂 CJS: dist/cjs/`);
  console.log(`   📂 Types: dist/*.d.ts\n`);
  
  // Print some example usage
  console.log('📖 Example usage:\n');
  console.log('   import { AvatarFaceTopKnot } from "@ibaldo/icons-react";');
  console.log('   // or');
  console.log('   import AvatarFaceTopKnot from "@ibaldo/icons-react/icons/AvatarFaceTopKnot";\n');
  console.log('   <AvatarFaceTopKnot size={32} color="#333" strokeWidth={2} />\n');
}

build().catch(console.error);
