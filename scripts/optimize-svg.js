#!/usr/bin/env node

/**
 * SVG Optimization Script
 *
 * Cleans up SVG files exported from Illustrator:
 * - Removes excessive decimal precision
 * - Removes UUIDs and unnecessary metadata
 * - Ensures stroke="currentColor" for theming
 * - Removes duplicate stroke attributes
 * - Standardizes viewBox to "0 0 24 24"
 * - Removes XML declaration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Round numbers to specified precision
 */
function roundNumber(num, precision = 2) {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
}

/**
 * Optimize SVG path data by reducing decimal precision
 * IMPORTANT: Preserve spaces between path commands to avoid breaking rendering
 */
function optimizePath(pathData) {
  // Match numbers (including decimals and negatives) while preserving command letters and spaces
  return pathData.replace(/(-?\d+\.?\d+)/g, (match) => {
    const num = parseFloat(match);
    // Round to 2 decimal places for coordinates
    const rounded = roundNumber(num, 2);
    // Remove unnecessary .0
    return rounded % 1 === 0 ? Math.round(rounded).toString() : rounded.toString();
  });
}

/**
 * Optimize SVG content
 * @param {string} svgContent - Raw SVG content
 * @returns {string} Optimized SVG content
 */
export function optimizeSVG(svgContent) {
  let optimized = svgContent;

  // Remove XML declaration
  optimized = optimized.replace(/<\?xml[^?]*\?>\s*/g, '');

  // Remove id attributes with UUIDs
  optimized = optimized.replace(/\s+id="uuid-[^"]+"/g, '');

  // Remove data-name attributes
  optimized = optimized.replace(/\s+data-name="[^"]+"/g, '');

  // Optimize all path data
  optimized = optimized.replace(/\bd="([^"]+)"/g, (match, pathData) => {
    return `d="${optimizePath(pathData)}"`;
  });

  // Optimize line, polyline, polygon, circle, ellipse coordinates
  const coordAttrs = ['x1', 'y1', 'x2', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'width', 'height'];
  coordAttrs.forEach(attr => {
    optimized = optimized.replace(
      new RegExp(`\\b${attr}="(-?\\d+\\.?\\d*)"`, 'g'),
      (match, value) => {
        const rounded = roundNumber(parseFloat(value), 2);
        return `${attr}="${rounded % 1 === 0 ? rounded : rounded}"`;
      }
    );
  });

  // Optimize points attribute (for polyline, polygon)
  optimized = optimized.replace(/\bpoints="([^"]+)"/g, (match, points) => {
    const optimizedPoints = points.trim().split(/\s+/).map(point => {
      return point.split(',').map(coord => {
        const num = parseFloat(coord);
        const rounded = roundNumber(num, 2);
        return rounded % 1 === 0 ? rounded.toString() : rounded.toString();
      }).join(',');
    }).join(' ');
    return `points="${optimizedPoints}"`;
  });

  // Ensure stroke="currentColor" (but don't duplicate if wrapper adds it)
  // Check if SVG already has stroke attribute at root level
  const hasSvgStroke = /<svg[^>]+stroke=/i.test(optimized);

  if (!hasSvgStroke) {
    // Add stroke="currentColor" to elements that have stroke attributes
    optimized = optimized.replace(
      /(<(?:path|line|polyline|polygon|circle|ellipse|rect)[^>]+)stroke="[^"]*"/gi,
      '$1stroke="currentColor"'
    );
  }

  // Ensure viewBox is standardized
  optimized = optimized.replace(
    /viewBox="[^"]*"/,
    'viewBox="0 0 24 24"'
  );

  // Remove width and height from SVG tag (let components control size)
  optimized = optimized.replace(/<svg([^>]*)width="[^"]*"([^>]*)/, '<svg$1$2');
  optimized = optimized.replace(/<svg([^>]*)height="[^"]*"([^>]*)/, '<svg$1$2');

  // Clean up extra whitespace (but preserve path data integrity)
  // Don't aggressively collapse whitespace - it breaks path commands
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
    const optimized = optimizeSVG(svgContent);

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
SVG Optimization Script
Usage:
  node scripts/optimize-svg.js <input-file-or-dir> [output-file-or-dir]

Examples:
  # Optimize single file
  node scripts/optimize-svg.js static/icons/raw/user-circle.svg static/icons/optimized/user-circle.svg

  # Optimize directory
  node scripts/optimize-svg.js static/icons/raw/ static/icons/optimized/

  # Optimize in place (overwrites original)
  node scripts/optimize-svg.js static/icons/raw/
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
