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
 * Generate metadata for a batch of icons using AI vision
 * @param {string[]} svgPaths - Array of SVG file paths
 * @returns {Promise<Array>} Array of metadata objects
 */
export async function generateMetadataWithAI(svgPaths) {
  console.log(`\n🤖 Generating AI metadata for ${svgPaths.length} icons...`);

  // Convert SVGs to base64 PNGs
  console.log('📸 Converting SVGs to images...');
  const images = await batchSvgToBase64(svgPaths);

  // Filter out any conversion errors
  const validImages = images.filter(img => !img.error);

  if (validImages.length === 0) {
    console.error('❌ No valid images to process');
    return [];
  }

  // Get existing names to avoid duplicates
  const existingNames = Object.keys(loadNameIndex());

  // Build the prompt with image content
  const content = [
    {
      type: 'text',
      text: buildPrompt(existingNames, validImages.length)
    }
  ];

  // Add all images to the content
  for (const img of validImages) {
    content.push({
      type: 'image',
      source: {
        type: 'base64',
        media_type: 'image/png',
        data: img.base64
      }
    });
  }

  try {
    console.log('🔍 Analyzing icons with Claude Vision...');

    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content
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
    for (let i = 0; i < validImages.length; i++) {
      const meta = metadata[i];
      const img = validImages[i];

      // If metadata is missing for this icon, use fallback
      if (!meta || typeof meta !== 'object') {
        console.warn(`⚠️  Missing metadata for ${img.filename}, using fallback`);
        const fallbackMeta = {
          name: suggestUniqueName(generateNameFromFilename(img.filename)),
          description: `An icon representing ${path.basename(img.filename, '.svg').replace(/-/g, ' ')}`,
          tags: path.basename(img.filename, '.svg').split('-').filter(w => !/^\d+$/.test(w)),
          categories: ['interface'],
          accessibility: {
            role: 'informative',
            suggestedLabel: path.basename(img.filename, '.svg').replace(/-/g, ' ')
          }
        };

        fallbackMeta.filename = path.basename(img.filename, '.svg');
        fallbackMeta.technical = {
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          hasStroke: true,
          hasFill: false
        };
        fallbackMeta.contributors = ['Henrique Ibaldo'];
        fallbackMeta.version = '1.0.0';
        fallbackMeta.deprecated = false;

        addName(fallbackMeta.name, img.filename);
        results.push({
          path: img.path,
          metadata: fallbackMeta
        });
        continue;
      }

      // Ensure name is unique
      if (!meta.name || existingNames.includes(meta.name)) {
        meta.name = suggestUniqueName(meta.name || generateNameFromFilename(img.filename));
      }

      // Add technical details
      meta.filename = path.basename(img.filename, '.svg');
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
      addName(meta.name, img.filename);

      results.push({
        path: img.path,
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
 * Build the AI prompt for metadata generation
 * @param {string[]} existingNames - Names to avoid
 * @param {number} iconCount - Number of icons being processed
 * @returns {string}
 */
function buildPrompt(existingNames, iconCount) {
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

REQUIREMENTS:

1. **name**: PascalCase component name
   - Clear and descriptive (e.g., "UserCircle", "ArrowLeft", "SettingsGear")
   - NO generic names like "Icon1" or "Icon2"
   - Must be unique - avoid these existing names: ${existingNames.slice(0, 50).join(', ')}${existingNames.length > 50 ? '...' : ''}

2. **description**: One clear sentence explaining what the icon represents
   - Focus on visual appearance and meaning
   - 10-100 characters

3. **tags**: Array of 5-10 search keywords
   - Include visual descriptors
   - Include functional concepts
   - Include alternative terms

4. **categories**: Array of 1-3 categories from this list ONLY:
   ${CATEGORIES.join(', ')}

5. **accessibility.role**: One of:
   - "decorative" - purely visual, hide from screen readers
   - "informative" - conveys meaning, needs label
   - "interactive" - used in buttons/links, needs clear label

6. **accessibility.suggestedLabel**: Brief aria-label for screen readers
   - 2-5 words
   - Action-oriented if interactive (e.g., "Go back", "Open settings")
   - Descriptive if informative (e.g., "Warning", "User profile")

IMPORTANT:
- Analyze the VISUAL DESIGN of each icon
- Generate appropriate metadata for EACH icon in order
- Return ONLY the JSON array, wrapped in \`\`\`json code blocks
- Ensure each icon gets its own complete metadata object`;
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
