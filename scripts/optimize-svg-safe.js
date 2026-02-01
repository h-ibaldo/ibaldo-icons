#!/usr/bin/env node

/**
 * SAFE SVG Optimization Script
 *
 * Conservative approach - only removes metadata, NOT precision
 * This ensures visual fidelity is preserved
 *
 * Cleans up SVG files exported from Illustrator:
 * - Removes UUIDs and unnecessary metadata
 * - Removes XML declaration
 * - Standardizes viewBox to "0 0 24 24"
 * - Removes width/height attributes
 * - Ensures stroke="currentColor" for theming
 *
 * DOES NOT:
 * - Modify path data precision (preserves visual accuracy)
 * - Collapse whitespace in path commands
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Safely optimize SVG content without touching precision
 * @param {string} svgContent - Raw SVG content
 * @returns {string} Optimized SVG content
 */
export function optimizeSVGSafe(svgContent) {
  let optimized = svgContent;

  // Remove XML declaration
  optimized = optimized.replace(/<\?xml[^?]*\?>\s*/g, '');

  // Remove id attributes with UUIDs
  optimized = optimized.replace(/\s+id="uuid-[^"]+"/g, '');

  // Remove data-name attributes
  optimized = optimized.replace(/\s+data-name="[^"]+"/g, '');

  // Ensure stroke="currentColor" on elements that have stroke
  // But DON'T change if already set
  optimized = optimized.replace(
    /(<(?:path|line|polyline|polygon|circle|ellipse|rect)[^>]+)stroke="(?!currentColor)[^"]*"/gi,
    '$1stroke="currentColor"'
  );

  // Ensure viewBox is standardized (but don't break if it's already correct)
  if (!/viewBox="0 0 24 24"/.test(optimized)) {
    optimized = optimized.replace(/viewBox="[^"]*"/, 'viewBox="0 0 24 24"');
  }

  // Remove width and height from SVG tag (let components control size)
  optimized = optimized.replace(/<svg([^>]*)width="[^"]*"([^>]*)/, '<svg$1$2');
  optimized = optimized.replace(/<svg([^>]*)height="[^"]*"([^>]*)/, '<svg$1$2');

  // Clean up ONLY tag-level whitespace, not within attributes
  optimized = optimized.replace(/>\s+</g, '>\n  <');
  optimized = optimized.trim();

  return optimized;
}

/**
 * Process a single SVG file
 */
function processFile(inputPath, outputPath) {
  try {
    const svgContent = fs.readFileSync(inputPath, 'utf8');
    const optimized = optimizeSVGSafe(svgContent);

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, optimized, 'utf8');

    const originalSize = Buffer.byteLength(svgContent, 'utf8');
    const optimizedSize = Buffer.byteLength(optimized, 'utf8');
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}`);
    console.log(`  ${originalSize}B → ${optimizedSize}B (${savings}% smaller)\n`);

    return { originalSize, optimizedSize };
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

/**
 * Process directory of SVG files
 */
function processDirectory(inputDir, outputDir) {
  if (!fs.existsSync(inputDir)) {
    console.error(`Error: Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.svg'));

  if (files.length === 0) {
    console.log('No SVG files found in', inputDir);
    return;
  }

  console.log(`Processing ${files.length} SVG files...\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let successCount = 0;

  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const result = processFile(inputPath, outputPath);

    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
      successCount++;
    }
  });

  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

  console.log('─'.repeat(50));
  console.log(`✓ Successfully optimized ${successCount}/${files.length} files`);
  console.log(`  Total: ${totalOriginal}B → ${totalOptimized}B (${totalSavings}% smaller)`);
}

// CLI Usage (only run if this file is executed directly)
const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
SAFE SVG Optimization Script
Usage:
  node scripts/optimize-svg-safe.js <input-file-or-dir> [output-file-or-dir]

Examples:
  # Optimize single file
  node scripts/optimize-svg-safe.js static/icons/raw/user-circle.svg static/icons/optimized/user-circle.svg

  # Optimize directory
  node scripts/optimize-svg-safe.js static/icons/raw/ static/icons/optimized/

  # Optimize in place (overwrites original)
  node scripts/optimize-svg-safe.js static/icons/raw/

Note: This is the SAFE version that preserves SVG precision for visual accuracy.
    `);
    process.exit(0);
  }

  const input = args[0];
  const output = args[1] || input;

  const inputStats = fs.statSync(input);

  if (inputStats.isDirectory()) {
    processDirectory(input, output);
  } else if (input.endsWith('.svg')) {
    processFile(input, output);
  } else {
    console.error('Error: Input must be an SVG file or directory');
    process.exit(1);
  }
}
