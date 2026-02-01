#!/usr/bin/env node

/**
 * Interactive Icon Processing Tool
 *
 * Workflow:
 * 1. Export SVG from Illustrator to static/icons/raw/
 * 2. Run this script
 * 3. Script will:
 *    - Optimize the SVG
 *    - Prompt for metadata (or use AI suggestions)
 *    - Generate metadata JSON
 *    - Move to appropriate category folder
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Import the SVG optimizer (we'll use it as a module)
import { optimizeSVG } from './optimize-svg.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const CATEGORIES = [
  'interface', 'arrows', 'communication', 'media', 'files',
  'business', 'social', 'weather', 'devices', 'health',
  'education', 'transportation', 'food', 'people', 'accessibility',
  'nature', 'sports', 'development', 'security', 'shopping',
  'time', 'location'
];

const ACCESSIBILITY_ROLES = ['decorative', 'informative', 'interactive'];

/**
 * Prompt user for input
 */
function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

/**
 * Convert kebab-case to PascalCase
 */
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Parse filename to suggest metadata
 */
function suggestMetadataFromFilename(filename) {
  const baseName = path.basename(filename, '.svg');

  // Extract words from kebab-case
  const words = baseName.split('-');

  // Suggest component name (PascalCase)
  const name = kebabToPascal(baseName);

  // Suggest description
  const description = `An icon representing ${words.join(' ')}`;

  // Suggest tags (include all words + common variations)
  const tags = [...new Set(words)];

  // Try to guess category from keywords
  const categoryGuesses = [];
  if (words.some(w => ['user', 'person', 'avatar', 'profile'].includes(w))) {
    categoryGuesses.push('people');
  }
  if (words.some(w => ['arrow', 'chevron'].includes(w))) {
    categoryGuesses.push('arrows');
  }
  if (words.some(w => ['mail', 'email', 'message', 'chat'].includes(w))) {
    categoryGuesses.push('communication');
  }
  if (words.some(w => ['play', 'pause', 'music', 'video'].includes(w))) {
    categoryGuesses.push('media');
  }
  if (words.some(w => ['file', 'folder', 'document'].includes(w))) {
    categoryGuesses.push('files');
  }

  // Default to interface if no guess
  if (categoryGuesses.length === 0) {
    categoryGuesses.push('interface');
  }

  return {
    name,
    filename: baseName,
    description,
    tags,
    categories: categoryGuesses
  };
}

/**
 * Interactive metadata collection
 */
async function collectMetadata(svgPath) {
  console.log('\n' + '='.repeat(60));
  console.log('ICON METADATA COLLECTION');
  console.log('='.repeat(60) + '\n');

  const suggestions = suggestMetadataFromFilename(svgPath);

  console.log('Processing:', path.basename(svgPath));
  console.log('Suggested metadata based on filename:\n');

  // Name
  const name = await question(
    `Component Name (PascalCase) [${suggestions.name}]: `
  ) || suggestions.name;

  // Filename
  const filename = await question(
    `Filename (kebab-case) [${suggestions.filename}]: `
  ) || suggestions.filename;

  // Description
  console.log(`\nSuggested: ${suggestions.description}`);
  const description = await question('Description: ') || suggestions.description;

  // Tags
  console.log(`\nSuggested tags: ${suggestions.tags.join(', ')}`);
  const tagsInput = await question('Tags (comma-separated): ');
  const tags = tagsInput
    ? tagsInput.split(',').map(t => t.trim().toLowerCase())
    : suggestions.tags;

  // Categories
  console.log(`\nAvailable categories:`);
  CATEGORIES.forEach((cat, i) => {
    const marker = suggestions.categories.includes(cat) ? '★' : ' ';
    console.log(`  ${marker} ${cat}`);
  });
  const categoriesInput = await question(
    `\nCategories (comma-separated) [${suggestions.categories.join(', ')}]: `
  );
  const categories = categoriesInput
    ? categoriesInput.split(',').map(c => c.trim().toLowerCase())
    : suggestions.categories;

  // Accessibility
  console.log(`\nAccessibility roles: ${ACCESSIBILITY_ROLES.join(', ')}`);
  const accessibilityRole = await question('Role [informative]: ') || 'informative';

  const suggestedLabel = await question('Suggested aria-label (for interactive use): ');

  // Variations (optional)
  const hasVariations = await question('\nIs this part of a variation series? (y/n) [n]: ');
  let variations = {};

  if (hasVariations.toLowerCase() === 'y') {
    const base = await question('Base concept name: ');
    const style = await question('Style variant: ');
    const relatedInput = await question('Related variations (comma-separated): ');
    const related = relatedInput ? relatedInput.split(',').map(r => r.trim()) : [];
    const number = await question('Variation number (optional): ');

    variations = {
      base,
      style,
      related,
      ...(number && { number: parseInt(number) })
    };
  }

  // Usage examples (optional)
  const addUsage = await question('\nAdd usage examples? (y/n) [n]: ');
  let usage = {};

  if (addUsage.toLowerCase() === 'y') {
    const commonInput = await question('Common use cases (comma-separated): ');
    const examplesInput = await question('Example contexts (comma-separated): ');

    usage = {
      common: commonInput ? commonInput.split(',').map(u => u.trim()) : [],
      examples: examplesInput ? examplesInput.split(',').map(e => e.trim()) : []
    };
  }

  // Aliases (optional)
  const aliasesInput = await question('\nAliases (comma-separated, optional): ');
  const aliases = aliasesInput ? aliasesInput.split(',').map(a => a.trim()) : [];

  const metadata = {
    name,
    filename,
    description,
    tags,
    categories,
    accessibility: {
      role: accessibilityRole,
      ...(suggestedLabel && { suggestedLabel })
    },
    ...(Object.keys(variations).length > 0 && { variations }),
    ...(Object.keys(usage).length > 0 && { usage }),
    technical: {
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      hasStroke: true,
      hasFill: false
    },
    contributors: ["Henrique Ibaldo"],
    version: "1.0.0",
    deprecated: false,
    ...(aliases.length > 0 && { aliases })
  };

  return metadata;
}

/**
 * Process a new icon
 */
async function processIcon(svgPath) {
  try {
    // 1. Read and optimize SVG
    console.log('\n📝 Step 1: Optimizing SVG...');
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    // Note: We'll need to export the optimizeSVG function from optimize-svg.js
    // For now, we'll just read the content
    // const optimized = optimizeSVG(svgContent);
    const optimized = svgContent; // TODO: integrate optimizer

    // 2. Collect metadata
    const metadata = await collectMetadata(svgPath);

    // 3. Show preview and confirm
    console.log('\n' + '─'.repeat(60));
    console.log('METADATA PREVIEW:');
    console.log('─'.repeat(60));
    console.log(JSON.stringify(metadata, null, 2));
    console.log('─'.repeat(60) + '\n');

    const confirm = await question('Save this metadata? (y/n): ');

    if (confirm.toLowerCase() !== 'y') {
      console.log('❌ Cancelled');
      return;
    }

    // 4. Save metadata JSON
    const metadataPath = path.join(projectRoot, 'metadata', 'icons', `${metadata.filename}.json`);
    const metadataDir = path.dirname(metadataPath);

    if (!fs.existsSync(metadataDir)) {
      fs.mkdirSync(metadataDir, { recursive: true });
    }

    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
    console.log('✓ Metadata saved:', metadataPath);

    // 5. Save optimized SVG to category folder
    const primaryCategory = metadata.categories[0];
    const optimizedPath = path.join(
      projectRoot,
      'static',
      'icons',
      'optimized',
      primaryCategory,
      `${metadata.filename}.svg`
    );

    const optimizedDir = path.dirname(optimizedPath);
    if (!fs.existsSync(optimizedDir)) {
      fs.mkdirSync(optimizedDir, { recursive: true });
    }

    fs.writeFileSync(optimizedPath, optimized, 'utf8');
    console.log('✓ Optimized SVG saved:', optimizedPath);

    // 6. Optionally delete from raw folder
    const deleteRaw = await question('\nDelete from raw folder? (y/n) [y]: ');
    if (deleteRaw.toLowerCase() !== 'n') {
      fs.unlinkSync(svgPath);
      console.log('✓ Removed from raw folder');
    }

    console.log('\n✅ Icon processed successfully!\n');

  } catch (error) {
    console.error('❌ Error processing icon:', error.message);
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
Interactive Icon Processing Tool

Usage:
  node scripts/process-new-icon.js <svg-file>

Example:
  node scripts/process-new-icon.js static/icons/raw/user-circle.svg

This will:
  1. Optimize the SVG file
  2. Prompt you for metadata (name, description, tags, categories, etc.)
  3. Save metadata JSON to metadata/icons/
  4. Save optimized SVG to static/icons/optimized/<category>/
  5. Optionally delete from raw folder
    `);
    process.exit(0);
  }

  const svgPath = args[0];

  if (!fs.existsSync(svgPath)) {
    console.error('❌ Error: File not found:', svgPath);
    process.exit(1);
  }

  if (!svgPath.endsWith('.svg')) {
    console.error('❌ Error: File must be an SVG');
    process.exit(1);
  }

  await processIcon(svgPath);

  rl.close();
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
