#!/usr/bin/env node

/**
 * Test Icon Build Script
 * 
 * Same as build-icons.js but allows limiting number of batches for testing
 * Usage: node scripts/build-icons-test.js [max-batches]
 * Example: node scripts/build-icons-test.js 5
 */

import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import { optimizeSVGSafe } from './optimize-svg-safe.js';
import { saveMetadata } from './ai-generate-metadata.js';
import { generateMetadataWithAI } from './ai-generate-metadata.js';

// Load environment variables FIRST
dotenv.config();

const execAsync = promisify(exec);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const SRC_ICONS_DIR = path.join(projectRoot, 'src', 'icons', 'raw');
const STATIC_ICONS_DIR = path.join(projectRoot, 'static', 'icons');
const OPTIMIZED_DIR = path.join(STATIC_ICONS_DIR, 'optimized');
const METADATA_DIR = path.join(projectRoot, 'metadata', 'icons');

// Get max batches from command line (default: 5)
const maxBatches = parseInt(process.argv[2]) || 5;

/**
 * Find all SVG files in a directory (recursively)
 */
function findSvgFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  let svgFiles = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    if (item.startsWith('.')) continue;

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      svgFiles = svgFiles.concat(findSvgFiles(fullPath));
    } else if (item.endsWith('.svg')) {
      svgFiles.push(fullPath);
    }
  }

  return svgFiles;
}

/**
 * Check which icons need processing
 */
function getIconsToProcess(svgPaths, forceAll = false) {
  if (forceAll) {
    return svgPaths;
  }

  const toProcess = [];

  for (const svgPath of svgPaths) {
    const filename = path.basename(svgPath, '.svg');
    const metadataPath = path.join(METADATA_DIR, `${filename}.json`);

    if (!fs.existsSync(metadataPath)) {
      toProcess.push(svgPath);
      continue;
    }

    const svgStat = fs.statSync(svgPath);
    const metaStat = fs.statSync(metadataPath);

    if (svgStat.mtime > metaStat.mtime) {
      toProcess.push(svgPath);
    }
  }

  return toProcess;
}

/**
 * Optimize and copy icons
 */
function optimizeAndCopyIcons(metadataResults) {
  console.log('\n📦 Optimizing and copying icons...');

  let copiedCount = 0;

  for (const result of metadataResults) {
    const { path: svgPath, metadata } = result;
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const optimized = optimizeSVGSafe(svgContent);

    const category = metadata.categories[0] || 'interface';
    const outputDir = path.join(OPTIMIZED_DIR, category);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${metadata.filename}.svg`);
    fs.writeFileSync(outputPath, optimized, 'utf8');
    copiedCount++;
  }

  console.log(`✅ Optimized and copied ${copiedCount} icons`);
}

/**
 * Build framework packages
 */
async function buildPackages() {
  console.log('\n📦 Building framework packages...\n');

  try {
    const reactPromise = execAsync('node scripts/build.js', {
      cwd: path.join(projectRoot, 'packages', 'icon-design-react'),
      maxBuffer: 50 * 1024 * 1024
    });

    const sveltePromise = execAsync('node scripts/build.js', {
      cwd: path.join(projectRoot, 'packages', 'icon-design-svelte'),
      maxBuffer: 50 * 1024 * 1024
    });

    const [reactResult, svelteResult] = await Promise.all([
      reactPromise.then(r => ({ package: 'React', ...r })),
      sveltePromise.then(r => ({ package: 'Svelte', ...r }))
    ]);

    console.log('✅ React package built');
    console.log('✅ Svelte package built');
  } catch (error) {
    console.error('❌ Package build error:', error.message);
    throw error;
  }
}

/**
 * Generate icons index
 */
async function generateIconsIndex() {
  console.log('\n📋 Generating icons index...');

  try {
    // For test builds, use algorithm naming and skip metadata for speed
    await execAsync('NAMING_STRATEGY=algorithm GENERATE_METADATA=false node scripts/generate-icons-index.js', {
      cwd: projectRoot
    });
    console.log('✅ Icons index generated (using fast algorithm naming)');
  } catch (error) {
    console.error('❌ Index generation error:', error.message);
    throw error;
  }
}

/**
 * Process icons in limited batches
 */
async function processInBatches(svgPaths, batchSize = 10) {
  const allResults = [];
  const totalBatches = Math.min(Math.ceil(svgPaths.length / batchSize), maxBatches);
  const iconsToProcess = svgPaths.slice(0, maxBatches * batchSize);

  console.log(`\n⚠️  TEST MODE: Processing only ${maxBatches} batches (${iconsToProcess.length} icons)`);
  console.log(`   Total available: ${svgPaths.length} icons\n`);

  for (let i = 0; i < iconsToProcess.length; i += batchSize) {
    const batch = iconsToProcess.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    
    console.log(`\nProcessing batch ${batchNum}/${totalBatches}...`);

    const results = await generateMetadataWithAI(batch);
    allResults.push(...results);

    if (i + batchSize < iconsToProcess.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return allResults;
}

/**
 * Main function
 */
async function main() {
  console.log('============================================================');
  console.log(`  ICON BUILD PIPELINE (TEST MODE - ${maxBatches} BATCHES)`);
  console.log('============================================================\n');

  const forceAll = process.argv.includes('--all');

  console.log('📁 Scanning for icons...');
  const allSvgFiles = findSvgFiles(SRC_ICONS_DIR);
  console.log(`Found ${allSvgFiles.length} icon(s) in src/icons/raw/`);

  const toProcess = getIconsToProcess(allSvgFiles, forceAll);
  console.log(`${toProcess.length} icon(s) need processing`);

  if (toProcess.length === 0) {
    console.log('\n✨ All icons are up to date!\n');
    console.log('To force rebuild: node scripts/build-icons-test.js [batches] --all');
    return;
  }

  const results = await processInBatches(toProcess);

  saveMetadata(results);

  optimizeAndCopyIcons(results);

  await buildPackages();

  await generateIconsIndex();

  console.log('\n============================================================');
  console.log('  ✅ BUILD COMPLETE!');
  console.log('============================================================\n');
  console.log(`Processed: ${results.length} icons (${maxBatches} batches)`);
  console.log(`Remaining: ${toProcess.length - results.length} icons\n`);
  console.log('Outputs:');
  console.log('  📁 Optimized SVGs: static/icons/optimized/');
  console.log('  📄 Metadata: metadata/icons/');
  console.log('  ⚛️  React: packages/icon-design-react/dist/');
  console.log('  🔶 Svelte: packages/icon-design-svelte/dist/');
  console.log('  📋 Index: static/icons-index.json\n');
  console.log('============================================================\n');
}

main().catch(error => {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
});
