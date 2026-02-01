#!/usr/bin/env node

/**
 * Batch Test Script - Process 10 sample icons
 *
 * Demonstrates the new workflow by:
 * 1. Optimizing SVG files
 * 2. Generating example metadata
 * 3. Showing before/after comparison
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimizeSVGSafe } from './optimize-svg-safe.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Test icons - diverse sample from your library
const TEST_ICONS = [
  'static/icons/application-1/door-2-leave-logout-arrow-out.svg',
  'static/icons/application-1/envelope-mail-email-arrow-up-feedback-3.svg',
  'static/icons/application-1/at-sign-8-email-contact-address.svg',
  'static/icons/application-1/download-arrow-down-box-1.svg',
  'static/icons/application-1/lock-4-check-checked-2-open.svg',
  'static/icons/application-1/heart-3.svg',
  'static/icons/application-1/lock-arrow-portrait-orientation-2.svg',
  'static/icons/application-1/install-updates-gear-arrow-down-4.svg',
  'static/icons/application-1/application-window-1-gear-settings-2.svg',
  'static/icons/popular/1-user-head-1.svg'
];

/**
 * Convert kebab-case to PascalCase
 */
function kebabToPascal(str) {
  // Remove leading numbers and clean up
  const cleaned = str.replace(/^\d+-/, '');
  return cleaned
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Generate suggested metadata from filename
 */
function generateMetadata(filename) {
  const baseName = path.basename(filename, '.svg');

  // Parse the filename to extract meaning
  const words = baseName.split('-').filter(w => !/^\d+$/.test(w)); // Remove pure numbers

  // Generate component name
  const name = kebabToPascal(baseName);

  // Generate clean filename (remove leading numbers)
  const cleanFilename = baseName.replace(/^\d+-/, '');

  // Suggest description
  const description = `An icon representing ${words.join(' ')}`;

  // Extract tags
  const tags = [...new Set(words)];

  // Guess categories
  const categoryMap = {
    'user': ['people', 'interface'],
    'person': ['people'],
    'avatar': ['people', 'interface'],
    'arrow': ['arrows', 'interface'],
    'chevron': ['arrows'],
    'mail': ['communication'],
    'email': ['communication'],
    'envelope': ['communication'],
    'message': ['communication'],
    'chat': ['communication'],
    'heart': ['interface', 'social'],
    'lock': ['security', 'interface'],
    'unlock': ['security', 'interface'],
    'key': ['security'],
    'settings': ['interface'],
    'gear': ['interface'],
    'download': ['interface', 'arrows'],
    'upload': ['interface', 'arrows'],
    'file': ['files'],
    'folder': ['files'],
    'document': ['files'],
    'window': ['interface'],
    'application': ['interface'],
    'door': ['interface'],
    'logout': ['interface'],
    'leave': ['interface']
  };

  const categories = new Set();
  words.forEach(word => {
    if (categoryMap[word]) {
      categoryMap[word].forEach(cat => categories.add(cat));
    }
  });

  if (categories.size === 0) {
    categories.add('interface');
  }

  // Guess accessibility role
  let role = 'informative';
  if (words.some(w => ['arrow', 'button', 'close', 'delete', 'add'].includes(w))) {
    role = 'interactive';
  }

  // Generate suggested label
  const labelWords = words.filter(w => !['1', '2', '3', '4', '5'].includes(w));
  const suggestedLabel = labelWords.slice(0, 3).join(' ');

  return {
    name,
    filename: cleanFilename,
    description,
    tags,
    categories: Array.from(categories),
    accessibility: {
      role,
      suggestedLabel
    },
    technical: {
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      hasStroke: true,
      hasFill: false
    },
    contributors: ["Henrique Ibaldo"],
    version: "1.0.0",
    deprecated: false
  };
}

/**
 * Process a single icon
 */
function processIcon(iconPath, index) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`TEST ${index + 1}/10: ${path.basename(iconPath)}`);
  console.log('='.repeat(70));

  try {
    // Read original SVG
    const originalSVG = fs.readFileSync(iconPath, 'utf8');
    const originalSize = Buffer.byteLength(originalSVG, 'utf8');

    // Optimize SVG (using safe optimizer)
    const optimizedSVG = optimizeSVGSafe(originalSVG);
    const optimizedSize = Buffer.byteLength(optimizedSVG, 'utf8');
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    // Generate metadata
    const metadata = generateMetadata(iconPath);

    // Save optimized SVG
    const optimizedPath = path.join(
      projectRoot,
      'static/icons/test-optimized',
      `${metadata.filename}.svg`
    );
    fs.writeFileSync(optimizedPath, optimizedSVG, 'utf8');

    // Save metadata
    const metadataPath = path.join(
      projectRoot,
      'metadata/test',
      `${metadata.filename}.json`
    );
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');

    // Display results
    console.log('\n📊 OPTIMIZATION RESULTS:');
    console.log(`   Original:  ${originalSize}B`);
    console.log(`   Optimized: ${optimizedSize}B`);
    console.log(`   Savings:   ${savings}% smaller`);

    console.log('\n📝 GENERATED METADATA:');
    console.log(`   Old name:  ${path.basename(iconPath, '.svg')}`);
    console.log(`   New name:  ${metadata.name}`);
    console.log(`   Filename:  ${metadata.filename}.svg`);
    console.log(`   Description: ${metadata.description}`);
    console.log(`   Tags:      ${metadata.tags.slice(0, 5).join(', ')}${metadata.tags.length > 5 ? '...' : ''}`);
    console.log(`   Categories: ${metadata.categories.join(', ')}`);
    console.log(`   A11y Role:  ${metadata.accessibility.role}`);
    console.log(`   Suggested Label: ${metadata.accessibility.suggestedLabel}`);

    console.log('\n📁 FILES CREATED:');
    console.log(`   ✓ ${optimizedPath}`);
    console.log(`   ✓ ${metadataPath}`);

    return {
      success: true,
      originalSize,
      optimizedSize,
      savings: parseFloat(savings),
      metadata
    };

  } catch (error) {
    console.error(`\n❌ ERROR: ${error.message}`);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Main function
 */
function main() {
  console.log('\n' + '█'.repeat(70));
  console.log('  ICON PROCESSING SYSTEM - BATCH TEST');
  console.log('  Testing with 10 diverse icons from your library');
  console.log('█'.repeat(70));

  const results = [];

  TEST_ICONS.forEach((iconPath, index) => {
    const fullPath = path.join(projectRoot, iconPath);

    if (!fs.existsSync(fullPath)) {
      console.log(`\n⚠️  Skipping ${iconPath} - file not found`);
      return;
    }

    const result = processIcon(fullPath, index);
    results.push(result);
  });

  // Summary
  console.log('\n' + '█'.repeat(70));
  console.log('  SUMMARY');
  console.log('█'.repeat(70));

  const successful = results.filter(r => r.success);
  const totalOriginal = successful.reduce((sum, r) => sum + r.originalSize, 0);
  const totalOptimized = successful.reduce((sum, r) => sum + r.optimizedSize, 0);
  const avgSavings = successful.reduce((sum, r) => sum + r.savings, 0) / successful.length;

  console.log(`\n✓ Successfully processed: ${successful.length}/${TEST_ICONS.length} icons`);
  console.log(`\n📊 Size Reduction:`);
  console.log(`   Total original:  ${totalOriginal}B`);
  console.log(`   Total optimized: ${totalOptimized}B`);
  console.log(`   Average savings: ${avgSavings.toFixed(1)}%`);

  console.log(`\n📁 Output Locations:`);
  console.log(`   Optimized SVGs: static/icons/test-optimized/`);
  console.log(`   Metadata JSON:  metadata/test/`);

  console.log(`\n🎯 Next Steps:`);
  console.log(`   1. Review the generated metadata files in metadata/test/`);
  console.log(`   2. Check optimized SVGs in static/icons/test-optimized/`);
  console.log(`   3. Refine metadata suggestions as needed`);
  console.log(`   4. When satisfied, process all 2,441 icons`);

  console.log('\n' + '█'.repeat(70) + '\n');

  // Show example metadata
  if (successful.length > 0) {
    console.log('📋 EXAMPLE METADATA (first icon):');
    console.log('─'.repeat(70));
    console.log(JSON.stringify(successful[0].metadata, null, 2));
    console.log('─'.repeat(70) + '\n');
  }
}

main();
