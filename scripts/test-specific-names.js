import 'dotenv/config';
import { generateAINames } from './utils/ai-naming.js';

const testFilenames = [
  'application-window-1-lupe-search',
  'application-window-2-lupe-search',
  'application-window-1-gear-settings-1',
  'application-window-1-cloud-1',
  'bell-1-notification-alarm-alert',
  'bell-3-notification-alarm-alert-clock'
];

console.log('Testing AI naming with improved prompts:\n');

const results = await generateAINames(testFilenames);

for (const filename of testFilenames) {
  console.log(`${filename}`);
  console.log(`  → ${results[filename]}\n`);
}
