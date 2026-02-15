#!/usr/bin/env node

/**
 * AI-Powered Metadata Generator
 *
 * Uses Anthropic's Claude Vision API to analyze icon designs
 * and generate rich, accurate metadata automatically
 */

import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
import { batchSvgToBase64 } from './utils/svg-to-image.js';
import { loadNameIndex, addName, suggestUniqueName } from './utils/name-index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables FIRST
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// Available categories for icons
const CATEGORIES = [
  'interface', 'arrows', 'communication', 'media', 'files',
  'business', 'social', 'weather', 'devices', 'health',
  'education', 'transportation', 'food', 'people', 'accessibility',
  'nature', 'sports', 'development', 'security', 'shopping',
  'time', 'location'
];

/**
 * Generate metadata for a batch of icons using AI (filename-based, no vision)
 * @param {string[]} svgPaths - Array of SVG file paths
 * @returns {Promise<Array>} Array of metadata objects
 */
export async function generateMetadataWithAI(svgPaths) {
  console.log(`\n🤖 Generating AI metadata for ${svgPaths.length} icons...`);

  // Get existing names to avoid duplicates
  const existingNames = Object.keys(loadNameIndex());

  // Extract filenames
  const filenames = svgPaths.map(p => path.basename(p, '.svg'));

  // Build text-only prompt (no images needed!)
  const promptText = buildFilenameBasedPrompt(existingNames, filenames);

  try {
    console.log('✨ Generating metadata from filenames with Claude...');

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: promptText
      }]
    });

    // Parse the response
    const responseText = message.content[0].text;

    // Extract JSON from the response
    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) ||
                     responseText.match(/\[[\s\S]*\]/);

    if (!jsonMatch) {
      console.error('❌ Could not parse AI response');
      console.log('Response:', responseText);
      return fallbackMetadataGeneration(svgPaths);
    }

    const metadata = JSON.parse(jsonMatch[1] || jsonMatch[0]);

    // Validate metadata is an array
    if (!Array.isArray(metadata)) {
      console.error('❌ AI response is not an array');
      return fallbackMetadataGeneration(svgPaths);
    }

    // Validate and enhance metadata
    const results = [];
    for (let i = 0; i < svgPaths.length; i++) {
      const meta = metadata[i];
      const svgPath = svgPaths[i];
      const filename = path.basename(svgPath, '.svg');

      // If metadata is missing for this icon, use fallback
      if (!meta || typeof meta !== 'object') {
        console.warn(`⚠️  Missing metadata for ${filename}, using fallback`);
        const fallbackMeta = {
          name: suggestUniqueName(generateNameFromFilename(filename)),
          description: `An icon representing ${filename.replace(/-/g, ' ')}`,
          tags: filename.split('-').filter(w => !/^\d+$/.test(w)),
          categories: ['interface'],
          accessibility: {
            role: 'informative',
            suggestedLabel: filename.replace(/-/g, ' ')
          }
        };

        fallbackMeta.filename = filename;
        fallbackMeta.technical = {
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          hasStroke: true,
          hasFill: false
        };
        fallbackMeta.contributors = ['Henrique Ibaldo'];
        fallbackMeta.version = '1.0.0';
        fallbackMeta.deprecated = false;

        addName(fallbackMeta.name, `${filename}.svg`);
        results.push({
          path: svgPath,
          metadata: fallbackMeta
        });
        continue;
      }

      // Ensure name is unique
      if (!meta.name || existingNames.includes(meta.name)) {
        meta.name = suggestUniqueName(meta.name || generateNameFromFilename(filename));
      }

      // Add technical details
      meta.filename = filename;
      meta.technical = {
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        hasStroke: true,
        hasFill: false
      };
      meta.contributors = ['Henrique Ibaldo'];
      meta.version = '1.0.0';
      meta.deprecated = false;

      // Add to name index
      addName(meta.name, `${filename}.svg`);

      results.push({
        path: svgPath,
        metadata: meta
      });
    }

    console.log(`✅ Generated metadata for ${results.length} icons`);
    return results;

  } catch (error) {
    console.error('❌ AI metadata generation failed:', error.message);

    if (error.status === 401) {
      console.error('Invalid API key. Check your ANTHROPIC_API_KEY environment variable.');
    } else if (error.status === 429) {
      console.error('Rate limit exceeded. Try again in a moment.');
    }

    // Fallback to filename-based generation
    return fallbackMetadataGeneration(svgPaths);
  }
}

/**
 * Build filename-based prompt (no vision needed)
 * @param {string[]} existingNames - Names to avoid
 * @param {string[]} filenames - Icon filenames
 * @returns {string}
 */
function buildFilenameBasedPrompt(existingNames, filenames) {
  const filenameList = filenames.map((f, i) => `${i + 1}. ${f}`).join('\n');

  return `You are generating metadata for ${filenames.length} icon(s) for a professional icon library called icon.design.

IMPORTANT: These are FILENAME-BASED metadata generations. The filenames contain keywords in order of IMPORTANCE (most important first).

For EACH filename below, generate metadata in this JSON array format:

[
  {
    "name": "ComponentName",
    "description": "Clear, concise description",
    "tags": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
    "categories": ["category1", "category2"],
    "accessibility": {
      "role": "informative",
      "suggestedLabel": "Brief aria-label"
    }
  }
]

CRITICAL NAMING RULES:

1. **name**: Create a COMPACT, PRACTICAL PascalCase component name from the filename

   **MANDATORY: ALWAYS start with the first 1-2 words from the filename!**

   - Take the FIRST 1-2 words (base concept - REQUIRED!)
   - SKIP middle redundant/descriptive words
   - From the END, pick 1-2 UNIQUE distinguishing concepts
   - **Detect synonym groups - use ONLY ONE word per group!**
   - Total: 2-4 words MAXIMUM

   **SYNONYM GROUPS (pick ONE per group):**
   - notification/alarm/alert → pick ONE
   - remove/delete/minus/negative → pick ONE
   - close/x → pick ONE
   - add/plus/positive → pick ONE
   - check/checked/checkmark → pick ONE

   Examples:
   - "bell-4-notification-alarm-alert-x-close-delete-remove-circle"
     Step 1: Base = "Bell4" (first word + number)
     Step 2: Skip "notification-alarm-alert" (all mean same thing)
     Step 3: End = "x-close-delete-remove" + "circle"
     Step 4: "x-close-delete-remove" are synonyms → pick ONE ("X" or "Close")
     Step 5: Final concepts = "X" + "Circle" (or "Close" + "Circle")
     ✅ Result: "Bell4XCircle" or "Bell4CloseCircle" (3 words)
     ❌ WRONG: "Bell4NotificationAlarmAlertXCloseDeleteRemoveCircle"

   - "bell-2-notification-alarm-alert-clock"
     Base = "Bell2", Skip middle, End = "clock" (unique)
     ✅ Result: "Bell2Clock" (2 words)

   - "at-sign-email-contact-address-1-remove-negative-minus-delete"
     Base = "AtSign" (compound), Skip "email-contact-address", End synonyms = pick "Remove"
     ✅ Result: "AtSignRemove" (2 words)

   Rules:
   - Start: 1st word OR 1st-2nd if compound ("at-sign", "application-window")
   - Middle: SKIP all descriptive/redundant words
   - End: Pick 1-2 UNIQUE concepts (collapse synonyms to ONE word each)
   - MAX 2-4 words total
   - Must be unique - avoid: ${existingNames.slice(0, 50).join(', ')}${existingNames.length > 50 ? '...' : ''}

2. **description**: One clear sentence (use all filename keywords for context)
   - Example: "A bell notification icon with a clock indicating scheduled alerts"

3. **tags**: Array of 5-10 keywords
   - Use ALL words from the filename (this is where you include everything)
   - Include synonyms and alternative terms

4. **categories**: Array of 1-3 categories from this list ONLY:
   ${CATEGORIES.join(', ')}

5. **accessibility.role**: One of "decorative", "informative", or "interactive"

6. **accessibility.suggestedLabel**: Brief aria-label (2-5 words)

NAMING STRATEGY (ALWAYS START WITH FIRST 1-2 WORDS):

- Filename: "bell-2-notification-alarm-alert-clock"
  - MUST start with: "bell" (1st word) OR "bell-2" (1st word + variant)
  - Add modifier: "clock" (distinguishes this variant)
  - ✅ CORRECT: "BellClock" or "Bell2Clock"
  - ❌ WRONG: "NotificationClock" (skipped 1st word "bell")

- Filename: "at-sign-email-contact-address-1-remove-negative-minus-delete"
  - MUST start with: "at-sign" (compound concept, need both words)
  - Add action: "remove" (skip synonyms negative/minus/delete)
  - ✅ CORRECT: "AtSignRemove"
  - ❌ WRONG: "EmailRemove" (skipped 1st word "at-sign")

- Filename: "application-window-1-chart-analytics-2"
  - MUST start with: "application-window" (compound concept) OR shorten to "app-window"
  - Add content: "chart"
  - ✅ CORRECT: "ApplicationWindowChart" or "AppWindowChart"
  - ❌ WRONG: "WindowChart" (skipped 1st word "application")

Filenames:
${filenameList}

Return ONLY the JSON array, wrapped in \`\`\`json code blocks.`;
}

/**
 * Build the AI prompt for metadata generation (OLD VISION-BASED - keeping for reference)
 * @param {string[]} existingNames - Names to avoid
 * @param {number} iconCount - Number of icons being processed
 * @returns {string}
 */
function buildPrompt(existingNames, iconCount, filenames = []) {
  const filenameContext = filenames.length > 0
    ? `\n\nFilename context (use ONLY for tags/description, NOT for component name):\n${filenames.map((f, i) => `${i + 1}. ${f}`).join('\n')}`
    : '';

  return `You are analyzing ${iconCount} icon design(s) for a professional icon library called icon.design.

For EACH icon image provided, generate metadata in this JSON array format:

[
  {
    "name": "ComponentName",
    "description": "Clear, concise description of what this icon represents",
    "tags": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
    "categories": ["category1", "category2"],
    "accessibility": {
      "role": "informative",
      "suggestedLabel": "Brief aria-label"
    }
  }
]

CRITICAL NAMING RULES:

1. **name**: Create a COMPACT, PRACTICAL PascalCase component name
   - Look at the ICON DESIGN and interpret what it represents
   - Create SHORT, memorable names (2-3 words max)
   - Examples of GOOD names: "UserCircle", "ArrowLeft", "SettingsGear", "EmailRemove", "BellOff"
   - Examples of BAD names: "AtSignEmailContactAddress1RemoveNegativeMinusDelete" (too long!)
   - If icon has multiple concepts, pick the PRIMARY concept
   - Add ONE modifier if needed: "ArrowLeft" not "ArrowLeftNavigationBack"
   - Use common design terminology: "Plus" not "AddPositive", "X" not "CloseRemoveDelete"
   - Must be unique - avoid these existing names: ${existingNames.slice(0, 50).join(', ')}${existingNames.length > 50 ? '...' : ''}

2. **description**: One clear sentence explaining what the icon represents
   - Focus on visual appearance and primary meaning
   - 10-100 characters
   - Example: "An email icon with a minus symbol" not "A comprehensive at sign email contact address with removal functionality"

3. **tags**: Array of 5-10 search keywords (use filename context here!)
   - Include visual descriptors from the icon AND filename
   - Include functional concepts
   - Include alternative terms
   - Tags can be verbose, names should NOT be

4. **categories**: Array of 1-3 categories from this list ONLY:
   ${CATEGORIES.join(', ')}

5. **accessibility.role**: One of:
   - "decorative" - purely visual, hide from screen readers
   - "informative" - conveys meaning, needs label
   - "interactive" - used in buttons/links, needs clear label

6. **accessibility.suggestedLabel**: Brief aria-label for screen readers
   - 2-5 words
   - Action-oriented if interactive (e.g., "Remove email", "Settings")
   - Descriptive if informative (e.g., "Warning", "User profile")

NAMING PHILOSOPHY:
- Component names are for DEVELOPERS to use in code
- They must be SHORT, CLEAR, and EASY TO TYPE
- Save the detailed keywords for tags and descriptions
- Think: "What would I want to type to use this icon?"

IMPORTANT:
- Analyze the VISUAL DESIGN of each icon carefully
- Interpret what the icon represents and name it accordingly
- Use the filename ONLY as context for tags/descriptions, NOT for naming
- Generate appropriate metadata for EACH icon in order
- Ensure each icon gets its own complete metadata object
- Return ONLY the JSON array, wrapped in \`\`\`json code blocks${filenameContext}`;
}

/**
 * Generate component name from filename (fallback)
 * @param {string} filename - SVG filename
 * @returns {string} PascalCase component name
 */
function generateNameFromFilename(filename) {
  const baseName = path.basename(filename, '.svg');

  // Remove leading numbers
  const cleaned = baseName.replace(/^\d+-/, '');

  // Convert kebab-case to PascalCase
  return cleaned
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Fallback metadata generation from filename
 * @param {string[]} svgPaths - Array of SVG file paths
 * @returns {Array} Array of basic metadata
 */
function fallbackMetadataGeneration(svgPaths) {
  console.log('⚠️  Using fallback filename-based metadata generation');

  const results = [];

  for (const svgPath of svgPaths) {
    const filename = path.basename(svgPath, '.svg');
    const name = suggestUniqueName(generateNameFromFilename(filename));

    // Extract words from filename
    const words = filename.split('-').filter(w => !/^\d+$/.test(w));

    const metadata = {
      name,
      filename,
      description: `An icon representing ${words.join(' ')}`,
      tags: [...new Set(words)],
      categories: ['interface'], // Default category
      accessibility: {
        role: 'informative',
        suggestedLabel: words.slice(0, 3).join(' ')
      },
      technical: {
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        hasStroke: true,
        hasFill: false
      },
      contributors: ['Henrique Ibaldo'],
      version: '1.0.0',
      deprecated: false
    };

    addName(name, path.basename(svgPath));

    results.push({
      path: svgPath,
      metadata
    });
  }

  return results;
}

/**
 * Save metadata to JSON files
 * @param {Array} metadataResults - Results from generateMetadataWithAI
 */
export function saveMetadata(metadataResults) {
  const metadataDir = path.join(projectRoot, 'metadata', 'icons');

  // Ensure directory exists
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir, { recursive: true });
  }

  for (const result of metadataResults) {
    const { metadata } = result;
    const metadataPath = path.join(metadataDir, `${metadata.filename}.json`);

    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf8');
  }

  console.log(`💾 Saved ${metadataResults.length} metadata files`);
}

/**
 * Process icons in batches
 * @param {string[]} svgPaths - Array of SVG file paths
 * @param {number} batchSize - Icons per batch (default 10)
 * @returns {Promise<Array>} All metadata results
 */
export async function processInBatches(svgPaths, batchSize = 10) {
  const allResults = [];

  for (let i = 0; i < svgPaths.length; i += batchSize) {
    const batch = svgPaths.slice(i, i + batchSize);
    console.log(`\nProcessing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(svgPaths.length / batchSize)}...`);

    const results = await generateMetadataWithAI(batch);
    allResults.push(...results);

    // Small delay to avoid rate limiting
    if (i + batchSize < svgPaths.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return allResults;
}

// CLI Usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
AI Metadata Generator

Usage:
  node scripts/ai-generate-metadata.js <svg-file-or-dir>

Environment:
  ANTHROPIC_API_KEY - Required API key

Examples:
  node scripts/ai-generate-metadata.js src/icons/raw/user-circle.svg
  node scripts/ai-generate-metadata.js src/icons/raw/
    `);
    process.exit(0);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY environment variable not set');
    process.exit(1);
  }

  const input = args[0];
  const inputStats = fs.statSync(input);

  let svgPaths = [];

  if (inputStats.isDirectory()) {
    // Find all SVG files in directory
    const files = fs.readdirSync(input).filter(f => f.endsWith('.svg'));
    svgPaths = files.map(f => path.join(input, f));
  } else if (input.endsWith('.svg')) {
    svgPaths = [input];
  } else {
    console.error('❌ Input must be an SVG file or directory');
    process.exit(1);
  }

  if (svgPaths.length === 0) {
    console.log('No SVG files found');
    process.exit(0);
  }

  console.log(`Found ${svgPaths.length} SVG file(s)`);

  processInBatches(svgPaths)
    .then(results => {
      saveMetadata(results);
      console.log('\n✅ Metadata generation complete!');
    })
    .catch(error => {
      console.error('\n❌ Error:', error.message);
      process.exit(1);
    });
}
