/**
 * Generate test metadata for a small set of icons
 * This is much faster than running the full generation
 */

import 'dotenv/config';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { generateAINames } from './utils/ai-naming.js';
import { generateMetadata, saveMetadata } from './utils/ai-metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get number of icons to process from command line (default: 10)
const limit = parseInt(process.argv[2]) || 10;

// Scan optimized directory and get first N icons
const iconFiles = [];
const fs2 = await import('fs/promises');
const optimizedDir = join(__dirname, '..', 'static', 'icons', 'optimized');

const categories = await fs2.readdir(optimizedDir);
for (const category of categories) {
  if (category.startsWith('.')) continue;
  const categoryPath = join(optimizedDir, category);
  const stats = await fs2.stat(categoryPath);
  if (!stats.isDirectory()) continue;

  const files = await fs2.readdir(categoryPath);
  for (const file of files) {
    if (file.endsWith('.svg') && iconFiles.length < limit) {
      iconFiles.push(file.replace('.svg', ''));
    }
    if (iconFiles.length >= limit) break;
  }
  if (iconFiles.length >= limit) break;
}

const TEST_ICONS = iconFiles;

console.log('🧪 Generating Test Metadata\n');
console.log(`Processing ${TEST_ICONS.length} test icons...\n`);

// Step 1: Generate AI names
console.log('Step 1: Generating AI names...');
const nameMap = await generateAINames(TEST_ICONS);

// Step 2: Prepare icon data for metadata generation
const icons = TEST_ICONS.map(filename => ({
  filename: filename + '.svg',
  name: nameMap[filename],
  path: `/icons/optimized/test/${filename}.svg`
}));

console.log('\nGenerated names:');
icons.forEach(icon => {
  console.log(`  ${icon.filename.replace('.svg', '')} → ${icon.name}`);
});

// Step 3: Generate metadata
console.log('\nStep 2: Generating metadata...');
const metadata = await generateMetadata(icons);

// Step 4: Save metadata files
const iconMap = {};
TEST_ICONS.forEach(filename => {
  iconMap[filename] = {
    filename: filename + '.svg',
    name: nameMap[filename],
    path: `/icons/optimized/test/${filename}.svg`
  };
});

await saveMetadata(metadata, iconMap);

// Step 5: Create a test index file
console.log('\n📋 Creating test index...');

const testIndex = {
  categories: ['test'],
  icons: {
    test: icons.map(icon => {
      const filename = icon.filename.replace('.svg', '');
      const meta = metadata[filename];

      // Convert PascalCase to Sentence case for display
      const displayName = icon.name.replace(/([A-Z])/g, ' $1').trim()
        .replace(/(\d+)/g, ' $1').trim()
        .replace(/\s+/g, ' ');
      const sentenceCase = displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase();

      return {
        name: icon.name,
        displayName: sentenceCase,
        path: icon.path,
        filename: icon.filename,
        tags: meta?.tags || [],
        description: meta?.description || '',
        searchText: meta ? [
          icon.name,
          sentenceCase,
          ...meta.tags,
          meta.description
        ].join(' ').toLowerCase() : ''
      };
    })
  }
};

const testIndexPath = join(__dirname, '..', 'static', 'icons-index-test.json');
await fs.writeFile(testIndexPath, JSON.stringify(testIndex, null, 2), 'utf-8');

console.log(`✅ Test index generated: ${testIndexPath}`);
console.log(`✅ Test metadata saved to metadata/icons/`);
console.log('\n📁 Generated files:');
console.log(`   - static/icons-index-test.json (test index)`);
TEST_ICONS.forEach(filename => {
  console.log(`   - metadata/icons/${filename}.json`);
});

console.log('\n✅ Done! You can now:');
console.log('   1. Check metadata files in metadata/icons/');
console.log('   2. View test index in static/icons-index-test.json');
console.log('   3. Compare with original filenames in static/icons/optimized/');
