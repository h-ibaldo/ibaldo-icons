#!/usr/bin/env node

/**
 * Build script for @icon-design/react
 * Converts SVG icons to React components with tree-shaking support
 */

const fs = require('fs');
const path = require('path');

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const SRC_ICONS_DIR = path.join(PROJECT_ROOT, 'src', 'icons', 'raw'); // New icons
const STATIC_ICONS_DIR = path.join(PROJECT_ROOT, 'static', 'icons'); // Legacy icons
const OPTIMIZED_ICONS_DIR = path.join(STATIC_ICONS_DIR, 'optimized'); // Processed new icons
const DIST_DIR = path.resolve(__dirname, '../dist');
const ESM_DIR = path.join(DIST_DIR, 'esm');
const CJS_DIR = path.join(DIST_DIR, 'cjs');
const ESM_ICONS_DIR = path.join(ESM_DIR, 'icons');
const CJS_ICONS_DIR = path.join(CJS_DIR, 'icons');

// Convert kebab-case to PascalCase for component names
function toPascalCase(str) {
  return str
    .replace(/^[0-9]+[-_]?/, '') // Remove leading numbers
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Convert filename to valid component name
function toComponentName(filename) {
  const name = filename.replace('.svg', '');
  let pascalName = toPascalCase(name);
  
  // Ensure it starts with a letter (prepend 'Icon' if it starts with number)
  if (/^[0-9]/.test(pascalName)) {
    pascalName = 'Icon' + pascalName;
  }
  
  // Handle empty or invalid names
  if (!pascalName || pascalName.length === 0) {
    pascalName = 'Icon';
  }
  
  return pascalName;
}

// Parse SVG and extract inner content and attributes
function parseSVG(svgContent) {
  // Remove XML declaration if present
  svgContent = svgContent.replace(/<\?xml[^>]*\?>/gi, '').trim();
  
  // Extract SVG tag attributes
  const svgMatch = svgContent.match(/<svg([^>]*)>([\s\S]*)<\/svg>/i);
  if (!svgMatch) {
    console.warn('Could not parse SVG');
    return null;
  }
  
  const attributes = svgMatch[1];
  let innerContent = svgMatch[2].trim();
  
  // Extract viewBox
  const viewBoxMatch = attributes.match(/viewBox=["']([^"']*)["']/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Convert SVG attributes to JSX (camelCase)
  innerContent = innerContent
    // Convert stroke-linecap to strokeLinecap
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    // Convert stroke-linejoin to strokeLinejoin  
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    // Convert stroke-width to strokeWidth
    .replace(/stroke-width=/g, 'strokeWidth=')
    // Convert fill-rule to fillRule
    .replace(/fill-rule=/g, 'fillRule=')
    // Convert clip-rule to clipRule
    .replace(/clip-rule=/g, 'clipRule=')
    // Convert clip-path to clipPath
    .replace(/clip-path=/g, 'clipPath=')
    // Convert data-name to dataName (or remove it)
    .replace(/\s*data-name="[^"]*"/g, '')
    // Remove id attributes (they can cause conflicts)
    .replace(/\s*id="[^"]*"/g, '')
    // Replace stroke="currentColor" - keep it for color inheritance
    // Replace fill="none" - keep it
    // Self-closing tags need to be valid JSX (they already are in SVG)
    ;
  
  return {
    viewBox,
    innerContent
  };
}

// Generate React component code (ESM)
function generateESMComponent(componentName, svgData) {
  return `import { forwardRef } from 'react';

const ${componentName} = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="${svgData.viewBox}"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={\`icon-design \${className}\`.trim()}
    {...props}
  >
    ${svgData.innerContent}
  </svg>
));

${componentName}.displayName = '${componentName}';

export default ${componentName};
export { ${componentName} };
`;
}

// Generate React component code (CJS)
function generateCJSComponent(componentName, svgData) {
  return `"use strict";

const { forwardRef } = require('react');

const ${componentName} = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "${svgData.viewBox}",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: \`icon-design \${className}\`.trim(),
    ...props
  }, ${generateCJSChildren(svgData.innerContent)})
));

${componentName}.displayName = '${componentName}';

module.exports = ${componentName};
module.exports.${componentName} = ${componentName};
module.exports.default = ${componentName};
`;
}

// Convert JSX children to React.createElement calls for CJS
function generateCJSChildren(innerContent) {
  // For simplicity, we'll use dangerouslySetInnerHTML for CJS
  // This is a common pattern for icon libraries
  const escaped = innerContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
  
  return `React.createElement('g', { dangerouslySetInnerHTML: { __html: \`${escaped}\` } })`;
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

// Recursively get all SVG files
function getAllSVGFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllSVGFiles(fullPath, files);
    } else if (item.endsWith('.svg')) {
      files.push(fullPath);
    }
  }
  
  return files;
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
  const { icons } = loadIconNames();
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
  const esmIndex = components
    .map(c => `export { default as ${c.name}, ${c.name} } from './icons/${c.name}.js';`)
    .join('\n');
  
  fs.writeFileSync(path.join(ESM_DIR, 'index.js'), esmIndex);
  
  // CJS index
  const cjsIndex = `"use strict";

${components.map(c => `const ${c.name} = require('./icons/${c.name}.js');`).join('\n')}

module.exports = {
${components.map(c => `  ${c.name}: ${c.name}.default || ${c.name},`).join('\n')}
};
`;
  
  fs.writeFileSync(path.join(CJS_DIR, 'index.js'), cjsIndex);
  
  // TypeScript index declaration
  const dtsIndex = components
    .map(c => `export { default as ${c.name}, ${c.name} } from './icons/${c.name}';`)
    .join('\n');
  
  fs.writeFileSync(path.join(DIST_DIR, 'index.d.ts'), dtsIndex);
  
  // Generate icons index declaration
  const iconsDtsIndex = components
    .map(c => `export { default as ${c.name}, ${c.name} } from './${c.name}';`)
    .join('\n');
  
  fs.writeFileSync(path.join(dtsIconsDir, 'index.d.ts'), iconsDtsIndex);
  
  console.log(`✅ Built ${components.length} React components`);
  console.log(`   📂 ESM: dist/esm/`);
  console.log(`   📂 CJS: dist/cjs/`);
  console.log(`   📂 Types: dist/*.d.ts\n`);
  
  // Print some example usage
  console.log('📖 Example usage:\n');
  console.log('   import { UserFaceTopKnot } from "@icon-design/react";');
  console.log('   // or');
  console.log('   import UserFaceTopKnot from "@icon-design/react/icons/UserFaceTopKnot";\n');
  console.log('   <UserFaceTopKnot size={32} color="#333" strokeWidth={2} />\n');
}

build().catch(console.error);
