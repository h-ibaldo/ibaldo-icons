#!/usr/bin/env node

/**
 * Build script for @icon-design/svelte
 * Converts SVG icons to Svelte components with tree-shaking support
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const SRC_ICONS_DIR = path.join(PROJECT_ROOT, 'src', 'icons', 'raw'); // New icons
const STATIC_ICONS_DIR = path.join(PROJECT_ROOT, 'static', 'icons'); // Legacy icons
const OPTIMIZED_ICONS_DIR = path.join(STATIC_ICONS_DIR, 'optimized'); // Processed new icons
const DIST_DIR = path.resolve(__dirname, '../dist');
const ICONS_DIST_DIR = path.join(DIST_DIR, 'icons');

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
  
  // Clean up inner content - remove data-name and id attributes
  innerContent = innerContent
    .replace(/\s*data-name="[^"]*"/g, '')
    .replace(/\s*id="[^"]*"/g, '');
  
  return {
    viewBox,
    innerContent
  };
}

// Generate Svelte component code
function generateSvelteComponent(componentName, svgData) {
  return `<script>
  /** @type {string} */
  export let color = 'currentColor';
  /** @type {number|string} */
  export let size = 24;
  /** @type {number|string} */
  export let strokeWidth = 1.5;
  /** @type {string} */
  let className = '';
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="${svgData.viewBox}"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon-design {className}"
  {...$$restProps}
>
  ${svgData.innerContent}
</svg>
`;
}

// Generate TypeScript declaration for Svelte component
function generateSvelteTypeDeclaration(componentName) {
  return `import { SvelteComponent } from 'svelte';

export interface ${componentName}Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ${componentName} extends SvelteComponent<${componentName}Props> {}
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
  console.log('🎨 Building @icon-design/svelte...\n');

  // Clean and create directories
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true });
  }

  fs.mkdirSync(ICONS_DIST_DIR, { recursive: true });

  // Get SVG files from multiple sources
  const svgFiles = [];
  let srcIconsCount = 0;
  let optimizedIconsCount = 0;

  // 1. New icons from src/icons/raw/ (direct source)
  if (fs.existsSync(SRC_ICONS_DIR)) {
    const srcIcons = getAllSVGFiles(SRC_ICONS_DIR);
    svgFiles.push(...srcIcons);
    srcIconsCount = srcIcons.length;
    console.log(`📁 Found ${srcIcons.length} icons in src/icons/raw/`);
  }

  // 2. Processed new icons from static/icons/optimized/
  if (fs.existsSync(OPTIMIZED_ICONS_DIR)) {
    const optimizedIcons = getAllSVGFiles(OPTIMIZED_ICONS_DIR);
    svgFiles.push(...optimizedIcons);
    optimizedIconsCount = optimizedIcons.length;
    console.log(`📁 Found ${optimizedIcons.length} icons in static/icons/optimized/`);
  }

  // 3. Legacy icons from static/icons/ (excluding optimized and test folders)
  if (fs.existsSync(STATIC_ICONS_DIR)) {
    const legacyDirs = fs.readdirSync(STATIC_ICONS_DIR)
      .filter(item => {
        const fullPath = path.join(STATIC_ICONS_DIR, item);
        return fs.statSync(fullPath).isDirectory() &&
               item !== 'optimized' &&
               !item.startsWith('test-') &&
               !item.startsWith('.');
      });

    for (const dir of legacyDirs) {
      const legacyIcons = getAllSVGFiles(path.join(STATIC_ICONS_DIR, dir));
      svgFiles.push(...legacyIcons);
    }
    console.log(`📁 Found ${svgFiles.length - srcIconsCount - optimizedIconsCount} legacy icons`);
  }

  console.log(`📁 Total: ${svgFiles.length} SVG files\n`);
  
  const components = [];
  const componentNameCounts = {};
  
  for (const svgPath of svgFiles) {
    const filename = path.basename(svgPath);
    let componentName = toComponentName(filename);
    
    // Handle duplicate component names by adding a suffix
    if (componentNameCounts[componentName]) {
      componentNameCounts[componentName]++;
      componentName = `${componentName}${componentNameCounts[componentName]}`;
    } else {
      componentNameCounts[componentName] = 1;
    }
    
    // Read and parse SVG
    const svgContent = fs.readFileSync(svgPath, 'utf-8');
    const svgData = parseSVG(svgContent);
    
    if (!svgData) {
      console.warn(`⚠️  Skipping ${filename} - could not parse`);
      continue;
    }
    
    // Generate component files
    const svelteCode = generateSvelteComponent(componentName, svgData);
    const dtsCode = generateSvelteTypeDeclaration(componentName);
    
    // Write Svelte component
    fs.writeFileSync(
      path.join(ICONS_DIST_DIR, `${componentName}.svelte`),
      svelteCode
    );
    
    // Write TypeScript declaration
    fs.writeFileSync(
      path.join(ICONS_DIST_DIR, `${componentName}.svelte.d.ts`),
      dtsCode
    );
    
    components.push({
      name: componentName,
      filename
    });
  }
  
  // Generate main index file
  console.log('📦 Generating index files...\n');
  
  // Index.js - re-exports all components
  const indexJs = components
    .map(c => `export { default as ${c.name} } from './icons/${c.name}.svelte';`)
    .join('\n');
  
  fs.writeFileSync(path.join(DIST_DIR, 'index.js'), indexJs);
  
  // Index.d.ts - TypeScript declarations
  const indexDts = components
    .map(c => `export { default as ${c.name} } from './icons/${c.name}.svelte';`)
    .join('\n');
  
  fs.writeFileSync(path.join(DIST_DIR, 'index.d.ts'), indexDts);
  
  console.log(`✅ Built ${components.length} Svelte components`);
  console.log(`   📂 Components: dist/icons/`);
  console.log(`   📂 Types: dist/*.d.ts\n`);
  
  // Print some example usage
  console.log('📖 Example usage:\n');
  console.log('   import { UserHead1 } from "@icon-design/svelte";');
  console.log('   // or');
  console.log('   import UserHead1 from "@icon-design/svelte/icons/UserHead1.svelte";\n');
  console.log('   <UserHead1 size={32} color="#333" strokeWidth={2} />\n');
}

build().catch(console.error);
