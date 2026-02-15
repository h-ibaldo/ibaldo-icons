/**
 * Test search metadata generation
 * Tests with just a few icons to verify tags and searchText are working
 */

import 'dotenv/config';
import { generateAINames } from './utils/ai-naming.js';
import { generateMetadata } from './utils/ai-metadata.js';

const testFilenames = [
  'bell-1-notification-alarm-alert',
  'application-window-1-lupe-search',
  'application-window-1-gear-settings-1',
  'user-head-1',
];

console.log('🧪 Testing Search Metadata Generation\n');
console.log('Step 1: Generate AI names...\n');

const nameMap = await generateAINames(testFilenames);

for (const filename of testFilenames) {
  console.log(`${filename} → ${nameMap[filename]}`);
}

console.log('\n\nStep 2: Generate metadata...\n');

const icons = testFilenames.map(filename => ({
  filename: filename + '.svg',
  name: nameMap[filename],
  path: `/icons/test/${filename}.svg`
}));

const metadata = await generateMetadata(icons);

console.log('\n\nStep 3: Test search functionality...\n');

for (const filename of testFilenames) {
  const meta = metadata[filename];
  const icon = icons.find(i => i.filename === filename + '.svg');

  if (meta) {
    console.log(`\n📋 ${icon.name}`);
    console.log(`   Display: ${meta.description.substring(0, 60)}...`);
    console.log(`   Tags: ${meta.tags.join(', ')}`);

    // Build searchText like the real system does
    const searchText = [
      icon.name,
      meta.tags.join(' '),
      meta.description
    ].join(' ').toLowerCase();

    // Test some searches
    console.log(`   Search tests:`);
    console.log(`     "notification" → ${searchText.includes('notification') ? '✅ Found' : '❌ Not found'}`);
    console.log(`     "bell" → ${searchText.includes('bell') ? '✅ Found' : '❌ Not found'}`);
    console.log(`     "search" → ${searchText.includes('search') ? '✅ Found' : '❌ Not found'}`);
    console.log(`     "settings" → ${searchText.includes('settings') ? '✅ Found' : '❌ Not found'}`);
  }
}

console.log('\n\n✅ Test complete! If all searches show "Found", the system is working correctly.');
