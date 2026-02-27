#!/usr/bin/env node

/**
 * Master Icon Build Script
 *
 * Orchestrates the complete icon processing pipeline:
 * 1. Scan for new/changed icons in src/icons/raw/
 * 2. Optimize SVGs (safe mode)
 * 3. Generate AI metadata
 * 4. Copy to static/icons/optimized/
 * 5. Build React package
 * 6. Build Svelte package
 * 7. Generate icons-index.json
 */

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import { optimizeSVGSafe } from './optimize-svg-safe.js';
import { processInBatches, saveMetadata } from './ai-generate-metadata.js';

// Load environment variables from .env file
dotenv.config();

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SRC_ICONS_DIR = path.join(projectRoot, 'src', 'icons', 'raw');
const STATIC_ICONS_DIR = path.join(projectRoot, 'static', 'icons');
const OPTIMIZED_DIR = path.join(STATIC_ICONS_DIR, 'optimized');
const METADATA_DIR = path.join(projectRoot, 'metadata', 'icons');

/**
 * Find all SVG files in a directory (recursively)
 * @param {string} dir - Directory to scan
 * @returns {string[]} Array of SVG file paths
 */
function findSvgFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  let svgFiles = [];

  const items = fs.readdirSync(dir);

  for (const item of items) {
    // Skip hidden files and directories
    if (item.startsWith('.')) continue;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      svgFiles = svgFiles.concat(findSvgFiles(fullPath));
    } else if (item.endsWith('.svg')) {
      svgFiles.push(fullPath);
    }
  }

  return svgFiles;
}

/**
 * Check which icons need processing
 * @param {string[]} svgPaths - Array of SVG paths
 * @returns {string[]} Icons that need processing
 */
function getIconsToProcess(svgPaths, forceAll = false) {
  if (forceAll) {
    return svgPaths;
  }

  const toProcess = [];

  for (const svgPath of svgPaths) {
    const filename = path.basename(svgPath, '.svg');
    const metadataPath = path.join(METADATA_DIR, `${filename}.json`);

    // Process if metadata doesn't exist
    if (!fs.existsSync(metadataPath)) {
      toProcess.push(svgPath);
      continue;
    }

    // Process if SVG is newer than metadata
    const svgStat = fs.statSync(svgPath);
    const metaStat = fs.statSync(metadataPath);

    if (svgStat.mtime > metaStat.mtime) {
      toProcess.push(svgPath);
    }
  }

  return toProcess;
}

/**
 * Optimize and copy icons to static/icons/optimized/
 * @param {Array} metadataResults - Results from metadata generation
 */
function optimizeAndCopyIcons(metadataResults) {
  console.log('\n📦 Optimizing and copying icons...');

  let copiedCount = 0;

  for (const result of metadataResults) {
    const { path: svgPath, metadata } = result;

    // Read original SVG
    const svgContent = fs.readFileSync(svgPath, 'utf8');

    // Optimize (safe mode - no path changes)
    const optimized = optimizeSVGSafe(svgContent);

    // Ensure optimized directory exists
    if (!fs.existsSync(OPTIMIZED_DIR)) {
      fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
    }

    // Write optimized SVG directly into optimized/ (no category subfolders)
    const outputPath = path.join(OPTIMIZED_DIR, `${metadata.filename}.svg`);
    fs.writeFileSync(outputPath, optimized, 'utf8');

    copiedCount++;
  }

  console.log(`✅ Optimized and copied ${copiedCount} icons`);
}

/**
 * Build React package
 */
async function buildReactPackage() {
  console.log('\n⚛️  Building React package...');

  try {
    await execAsync('npm run build', {
      cwd: path.join(projectRoot, 'packages', 'icon-design-react')
    });
    console.log('✅ React package built');
  } catch (error) {
    console.error('❌ React package build failed:', error.message);
    throw error;
  }
}

/**
 * Build Svelte package
 */
async function buildSveltePackage() {
  console.log('\n🔶 Building Svelte package...');

  try {
    await execAsync('npm run build', {
      cwd: path.join(projectRoot, 'packages', 'icon-design-svelte')
    });
    console.log('✅ Svelte package built');
  } catch (error) {
    console.error('❌ Svelte package build failed:', error.message);
    throw error;
  }
}

/**
 * Generate icons index for website
 */
async function generateIconsIndex() {
  console.log('\n📋 Generating icons index...');

  try {
    // Use algorithm naming for regular builds (fast, no API calls)
    // Run `npm run generate:index:full` manually for AI naming + metadata
    await execAsync('NAMING_STRATEGY=algorithm GENERATE_METADATA=false node scripts/generate-icons-index.js', {
      cwd: projectRoot
    });
    console.log('✅ Icons index generated (using fast algorithm naming)');
    console.log('💡 Tip: Run `npm run generate:index:full` for AI naming + metadata');
  } catch (error) {
    console.error('❌ Icons index generation failed:', error.message);
    throw error;
  }
}

/**
 * Main build function
 */
async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('  ICON BUILD PIPELINE');
  console.log('='.repeat(60));

  const args = process.argv.slice(2);
  const forceAll = args.includes('--all');

  // Step 1: Find SVG files
  console.log('\n📁 Scanning for icons...');
  const svgFiles = findSvgFiles(SRC_ICONS_DIR);

  if (svgFiles.length === 0) {
    console.log('No icons found in src/icons/raw/');
    console.log('\nTo add icons:');
    console.log('  1. Export from Illustrator to src/icons/raw/');
    console.log('  2. Run: npm run build:icons');
    return;
  }

  console.log(`Found ${svgFiles.length} icon(s) in src/icons/raw/`);

  // Step 2: Check which need processing
  const toProcess = getIconsToProcess(svgFiles, forceAll);

  if (toProcess.length === 0) {
    console.log('\n✨ All icons are up to date!');
    console.log('\nTo force rebuild: npm run build:icons --all');
    return;
  }

  console.log(`${toProcess.length} icon(s) need processing`);

  // Step 3: Generate metadata with AI
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('\n⚠️  ANTHROPIC_API_KEY not set - using fallback metadata generation');
    console.warn('   For AI-powered metadata, set ANTHROPIC_API_KEY in your environment');
  }

  const metadataResults = await processInBatches(toProcess);

  // Step 4: Save metadata
  saveMetadata(metadataResults);

  // Step 5: Optimize and copy to static
  optimizeAndCopyIcons(metadataResults);

  // Step 6: Build packages
  console.log('\n📦 Building framework packages...');

  try {
    await Promise.all([
      buildReactPackage(),
      buildSveltePackage()
    ]);
  } catch (error) {
    console.error('\n❌ Package builds failed');
    process.exit(1);
  }

  // Step 7: Generate icons index
  await generateIconsIndex();

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('  ✅ BUILD COMPLETE!');
  console.log('='.repeat(60));
  console.log(`\nProcessed: ${toProcess.length} icons`);
  console.log(`Total icons: ${svgFiles.length}`);
  console.log('\nOutputs:');
  console.log(`  📁 Optimized SVGs: static/icons/optimized/`);
  console.log(`  📄 Metadata: metadata/icons/`);
  console.log(`  ⚛️  React: packages/icon-design-react/dist/`);
  console.log(`  🔶 Svelte: packages/icon-design-svelte/dist/`);
  console.log(`  📋 Index: static/icons-index.json`);
  console.log('\n' + '='.repeat(60) + '\n');
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  });
}
