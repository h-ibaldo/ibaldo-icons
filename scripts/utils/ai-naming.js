/**
 * AI-Powered Icon Naming Utility
 *
 * Uses Claude AI to generate intelligent, concise component names from descriptive filenames
 * Focuses on consistency, brevity, and developer-friendliness
 */

import Anthropic from '@anthropic-ai/sdk';
import { CONFIG } from '../config.js';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Generate AI-powered names for a batch of icon filenames
 * @param {string[]} filenames - Array of icon filenames (without .svg)
 * @param {Object} existingNames - Map of already-used names to avoid duplicates
 * @returns {Promise<Object>} Map of filename -> generated name
 */
export async function generateAINames(filenames, existingNames = {}) {
  if (filenames.length === 0) return {};

  console.log(`\n🤖 Generating AI names for ${filenames.length} icons...`);

  // Process in batches for optimal API usage
  const batchSize = CONFIG.ai.batchSizes.naming;
  const results = {};

  for (let i = 0; i < filenames.length; i += batchSize) {
    const batch = filenames.slice(i, i + batchSize);
    const batchResults = await processBatch(batch, existingNames);
    Object.assign(results, batchResults);

    // Update existing names to avoid duplicates in subsequent batches
    Object.assign(existingNames, batchResults);

    console.log(`  Processed ${Math.min(i + batchSize, filenames.length)}/${filenames.length} icons`);
  }

  return results;
}

/**
 * Process a single batch of filenames
 * @param {string[]} filenames - Batch of filenames
 * @param {Object} existingNames - Already-used names
 * @returns {Promise<Object>} Map of filename -> generated name
 */
async function processBatch(filenames, existingNames) {
  const existingNamesList = Object.values(existingNames).join(', ');

  const prompt = `You are an expert at creating concise, developer-friendly component names for an icon library.

**CRITICAL RULES:**

1. **Consistency for Icon Series**: Icons with numbered variants must have consistent base names
   - Example: bell-1, bell-2, bell-3 → Bell1, Bell2, Bell3 (NOT BellNotification, Bell, BellAlert2)

2. **Name Length**: Maximum 1-2 words + optional variant number
   - Good: Bell1, Clock2, UserCircle, WindowChart2
   - Bad: NotificationAlarmBell, ChartAnalyticsWindow

3. **Variant Numbers**: Preserve numbers from filename
   - bell-1 → Bell1
   - gear-settings-2 → Gear2
   - user-head-circle (no number) → UserCircle

4. **Distinguish Unique Features**: Include distinguishing features for variants
   - bell-1-notification-alarm-alert → Bell1 (redundant synonyms removed)
   - bell-3-notification-alarm-clock → Bell3Clock (unique feature kept)
   - bell-4-x-close-delete-circle → Bell4XCircle (X + Circle are unique)
   - application-window-1-lupe-search → ApplicationWindow1Search (keep functional feature!)
   - IMPORTANT: If an icon has a unique functional element (search, filter, settings, cloud, etc.), ALWAYS include it!

5. **Avoid Redundancy**: Skip synonym groups
   - notification-alarm-alert → skip entirely OR use one word
   - x-close-delete-remove → use "X" (shortest/clearest)
   - add-plus-positive → use "Add" or "Plus"

6. **Semantic Accuracy**: Name should reflect what icon represents
   - application-window-microsoft-word → WindowWord (NOT WindowWave)

7. **Format**: PascalCase only, no spaces/underscores/special chars

8. **Generic Words to Skip**: Skip only these: icon, symbol, graphic, image
   - Do NOT skip functional words like: search, lupe, magnifier, filter, settings, etc.
   - These describe what the icon does and should be included!

9. **Compound Concepts**: Keep together as base unit
   - at-sign-1 → AtSign1 (not Sign1)
   - application-window-2 → ApplicationWindow2 (not Window2)

10. **Shapes/Modifiers**: Include when they differentiate
    - Circle, Square, Triangle, Check, X, Plus are important distinguishers

**Existing Names to Avoid Duplicates:**
${existingNamesList || 'None yet'}

**Icons to Name:**
${filenames.map((f, i) => `${i + 1}. ${f}`).join('\n')}

**Output Format:**
Respond with ONLY a JSON object, no other text. Format:
{
  "filename-1": "ComponentName1",
  "filename-2": "ComponentName2"
}

Example input/output:
Input:
1. bell-1-notification-alarm-alert
2. bell-2-notification-alarm-alert
3. bell-3-notification-alarm-alert-clock
4. user-head-1
5. user-head-2-circle

Output:
{
  "bell-1-notification-alarm-alert": "Bell1",
  "bell-2-notification-alarm-alert": "Bell2",
  "bell-3-notification-alarm-alert-clock": "Bell3Clock",
  "user-head-1": "User1",
  "user-head-2-circle": "User2Circle"
}`;

  try {
    const message = await anthropic.messages.create({
      model: CONFIG.ai.models.naming,
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: CONFIG.ai.temperature,
    });

    const responseText = message.content[0].text;

    // Extract JSON from response (in case there's extra text)
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Failed to parse AI response:', responseText);
      return fallbackNaming(filenames);
    }

    const result = JSON.parse(jsonMatch[0]);

    // Validate all filenames got a name
    const missingNames = filenames.filter(f => !result[f]);
    if (missingNames.length > 0) {
      console.warn(`⚠️  AI didn't name: ${missingNames.join(', ')}`);
      // Use fallback for missing names
      const fallback = fallbackNaming(missingNames);
      Object.assign(result, fallback);
    }

    return result;

  } catch (error) {
    console.error('Error calling AI:', error.message);
    console.log('Falling back to rule-based naming...');
    return fallbackNaming(filenames);
  }
}

/**
 * Fallback naming when AI is unavailable
 * Uses simplified rule-based approach
 */
function fallbackNaming(filenames) {
  const result = {};

  for (const filename of filenames) {
    const words = filename.toLowerCase().split('-').filter(w => w.length > 0);

    if (words.length === 0) {
      result[filename] = 'Icon';
      continue;
    }

    // Take first 1-2 words
    let name = '';
    let wordCount = 0;
    let hasNumber = false;

    for (let i = 0; i < words.length && wordCount < 2; i++) {
      const word = words[i];

      // Check if it's a number
      if (/^\d+$/.test(word)) {
        name += word;
        hasNumber = true;
        break;
      }

      // Skip generic words
      if (['icon', 'symbol', 'graphic', 'image'].includes(word)) {
        continue;
      }

      name += word.charAt(0).toUpperCase() + word.slice(1);
      wordCount++;
    }

    result[filename] = name || 'Icon';
  }

  return result;
}

/**
 * Test the AI naming with sample icons
 */
export async function testAINaming() {
  const testFilenames = [
    'bell-1-notification-alarm-alert',
    'bell-2-notification-alarm-alert',
    'bell-3-notification-alarm-alert-clock',
    'bell-4-notification-alarm-alert-x-close-delete-remove-circle',
    'user-head-1',
    'user-head-2-circle',
    'application-window-1-chart-analytics',
    'application-window-2-microsoft-word',
    'at-sign-email-contact-address-1',
    'gear-settings-1',
  ];

  console.log('\n🧪 Testing AI Naming:\n');

  const results = await generateAINames(testFilenames);

  for (const filename of testFilenames) {
    console.log(`${filename}`);
    console.log(`  → ${results[filename]}\n`);
  }
}
