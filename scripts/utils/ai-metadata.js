/**
 * AI-Powered Metadata Generator
 *
 * Generates rich metadata (description, tags, categories, accessibility)
 * based on icon filenames and the AI-generated component names
 */

import Anthropic from '@anthropic-ai/sdk';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ICON_CATEGORIES, CONFIG } from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/**
 * Generate metadata for a batch of icons
 * @param {Object[]} icons - Array of {filename, name, path} objects
 * @returns {Promise<Object>} Map of filename -> metadata
 */
export async function generateMetadata(icons) {
  if (icons.length === 0) return {};

  console.log(`\n📝 Generating metadata for ${icons.length} icons...`);

  // Process in batches for optimal API usage
  const batchSize = CONFIG.ai.batchSizes.metadata;
  const results = {};

  for (let i = 0; i < icons.length; i += batchSize) {
    const batch = icons.slice(i, i + batchSize);
    const batchResults = await processBatch(batch);
    Object.assign(results, batchResults);

    console.log(`  Processed ${Math.min(i + batchSize, icons.length)}/${icons.length} metadata`);
  }

  return results;
}

/**
 * Process a single batch of icons
 */
async function processBatch(icons) {
  const prompt = `You are an expert at generating rich metadata for icon libraries.

**Your Task:**
Generate detailed metadata for each icon based on its filename and component name.

**Output Format:**
Respond with ONLY a JSON object, no other text. Format:
{
  "filename-without-extension": {
    "description": "Brief, clear description of what the icon represents (1-2 sentences)",
    "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
    "categories": ["category1", "category2"],
    "accessibility": {
      "role": "decorative or informative",
      "suggestedLabel": "Screen reader friendly label"
    }
  }
}

**Guidelines:**

1. **Description**:
   - Clear, concise (1-2 sentences)
   - Describe what the icon represents, not what it looks like
   - Focus on use cases and meaning

2. **Tags**:
   - 5-8 relevant keywords
   - Include synonyms and related terms
   - Help with searchability
   - Lowercase only

3. **Categories**:
   - Choose 1-2 most relevant from: ${ICON_CATEGORIES.join(', ')}
   - Primary category first

4. **Accessibility**:
   - role: "decorative" (purely visual) or "informative" (conveys meaning)
   - suggestedLabel: Brief, descriptive label for screen readers

**Icons to Process:**
${icons.map((icon, i) => `${i + 1}. Filename: ${icon.filename.replace('.svg', '')}
   Component Name: ${icon.name}`).join('\n\n')}

**Example:**
Input:
1. Filename: bell-1-notification-alarm-alert
   Component Name: Bell1

Output:
{
  "bell-1-notification-alarm-alert": {
    "description": "Notification bell icon for alerts and reminders. Used to indicate new notifications or enable notification settings.",
    "tags": ["bell", "notification", "alert", "alarm", "reminder", "notify", "sound"],
    "categories": ["interface", "communication"],
    "accessibility": {
      "role": "informative",
      "suggestedLabel": "Notification bell"
    }
  }
}`;

  try {
    const message = await anthropic.messages.create({
      model: CONFIG.ai.models.metadata,
      max_tokens: 8192,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: CONFIG.ai.temperature,
    });

    const responseText = message.content[0].text;

    // Extract JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('Failed to parse AI response:', responseText);
      return fallbackMetadata(icons);
    }

    const result = JSON.parse(jsonMatch[0]);

    // Validate all icons got metadata
    const missingMetadata = icons.filter(icon => {
      const filename = icon.filename.replace('.svg', '');
      return !result[filename];
    });

    if (missingMetadata.length > 0) {
      console.warn(`⚠️  AI didn't generate metadata for: ${missingMetadata.map(i => i.filename).join(', ')}`);
      const fallback = fallbackMetadata(missingMetadata);
      Object.assign(result, fallback);
    }

    return result;

  } catch (error) {
    console.error('Error calling AI:', error.message);
    console.log('Falling back to basic metadata...');
    return fallbackMetadata(icons);
  }
}

/**
 * Fallback metadata generator
 */
function fallbackMetadata(icons) {
  const result = {};

  for (const icon of icons) {
    const filename = icon.filename.replace('.svg', '');
    const words = filename.split('-').filter(w => w.length > 0 && !/^\d+$/.test(w));

    result[filename] = {
      description: `${icon.name} icon`,
      tags: words.slice(0, 8),
      categories: ['interface'],
      accessibility: {
        role: 'informative',
        suggestedLabel: icon.name
      }
    };
  }

  return result;
}

/**
 * Convert PascalCase to Sentence case
 * @param {string} pascalCase - PascalCase string (e.g., "Bell1Clock")
 * @returns {string} Sentence case string (e.g., "Bell 1 clock")
 */
function toSentenceCase(pascalCase) {
  // Add space before capital letters and numbers
  const withSpaces = pascalCase.replace(/([A-Z])/g, ' $1').trim();

  // Add space before numbers
  const withNumberSpaces = withSpaces.replace(/(\d+)/g, ' $1').trim();

  // Clean up multiple spaces
  const cleaned = withNumberSpaces.replace(/\s+/g, ' ');

  // Capitalize first letter, lowercase the rest
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}

/**
 * Generate original title from filename
 * @param {string} filename - Icon filename (without .svg)
 * @returns {string} Human-readable title
 */
function generateOriginalTitle(filename) {
  // Split by dashes and convert to title case
  const words = filename.split('-').filter(w => w.length > 0);
  return words.map(word => {
    // Keep numbers as-is
    if (/^\d+$/.test(word)) return word;
    // Capitalize first letter of each word
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

/**
 * Save metadata to disk
 * @param {Object} metadataMap - Map of filename -> metadata
 * @param {Object} iconMap - Map of filename -> icon data (with name, path)
 */
export async function saveMetadata(metadataMap, iconMap) {
  const metadataDir = join(__dirname, '..', '..', 'metadata', 'icons');

  // Ensure metadata directory exists
  await fs.mkdir(metadataDir, { recursive: true });

  console.log('\n💾 Saving metadata files...');

  let savedCount = 0;
  for (const [filename, metadata] of Object.entries(metadataMap)) {
    const icon = iconMap[filename];
    if (!icon) continue;

    const fullMetadata = {
      name: icon.name, // AI-generated PascalCase name (e.g., "Bell1Clock")
      displayName: toSentenceCase(icon.name), // Sentence case for display (e.g., "Bell 1 clock")
      originalTitle: generateOriginalTitle(filename), // Original filename-based title (e.g., "Bell 1 Notification Alarm Alert Clock")
      description: metadata.description,
      tags: metadata.tags,
      categories: metadata.categories,
      accessibility: metadata.accessibility,
      filename: filename,
      technical: {
        viewBox: CONFIG.icon.viewBox,
        strokeWidth: CONFIG.icon.strokeWidth,
        hasStroke: CONFIG.icon.hasStroke,
        hasFill: CONFIG.icon.hasFill
      },
      contributors: ['Henrique Ibaldo'],
      version: '1.0.0',
      deprecated: false,
      generatedAt: new Date().toISOString()
    };

    const metadataPath = join(metadataDir, `${filename}.json`);
    await fs.writeFile(metadataPath, JSON.stringify(fullMetadata, null, 2), 'utf-8');
    savedCount++;
  }

  console.log(`✓ Saved ${savedCount} metadata files to ${metadataDir}`);
}

/**
 * Clear old metadata files
 */
export async function clearOldMetadata() {
  const metadataDir = join(__dirname, '..', '..', 'metadata', 'icons');

  try {
    const files = await fs.readdir(metadataDir);
    let deletedCount = 0;

    for (const file of files) {
      if (file.endsWith('.json')) {
        await fs.unlink(join(metadataDir, file));
        deletedCount++;
      }
    }

    console.log(`🗑️  Cleared ${deletedCount} old metadata files`);
  } catch (error) {
    // Directory doesn't exist yet, that's ok
    console.log('No old metadata to clear');
  }
}
