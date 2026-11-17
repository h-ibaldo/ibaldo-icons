/**
 * Generates static/icons-index.json for the website.
 *
 * Names, tags, descriptions and categories all come from metadata/icons/
 * through scripts/utils/icon-names.cjs, the same source the React and Svelte
 * packages use. No AI calls happen here: naming is done ahead of time
 * (see NAMING-GUIDE.md).
 */

import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import iconNames from './utils/icon-names.cjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = join(__dirname, '..', 'static', 'icons-index.json');
const FOLDER = 'optimized';

// "AvatarFaceTopKnot" -> "Avatar face top knot"
function toSentenceCase(name) {
  const spaced = name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/([A-Za-z])(\d)/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
}

async function generateIndex() {
  const { icons } = iconNames.loadIconNames();
  const categories = new Set();

  const entries = icons.map(({ filename, name, aliases, metadata }) => {
    const displayName = toSentenceCase(name);
    const semantic = Array.isArray(metadata?.categories) && metadata.categories.length ? metadata.categories : [FOLDER];
    semantic.forEach((c) => categories.add(c));

    const entry = {
      name,
      displayName,
      path: `/icons/${FOLDER}/${filename}.svg`,
      filename: `${filename}.svg`,
      category: FOLDER,
      categories: semantic
    };
    if (metadata?.featured) entry.featured = true;
    // Old names (aliases) stay searchable, so "Cloud3UploadAlt2" still finds CloudUploadRound
    if (aliases.length) entry.aliases = aliases;
    if (metadata) {
      if (metadata.tags) entry.tags = metadata.tags;
      if (metadata.description) entry.description = metadata.description;
      entry.searchText = [name, displayName, ...aliases, ...(metadata.tags || []), metadata.description || '', ...semantic]
        .join(' ')
        .toLowerCase();
    }
    return entry;
  });

  // Featured icons (the avatars) first, then alphabetical
  entries.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.name.localeCompare(b.name));

  const index = {
    categories: [...categories].sort(),
    icons: { [FOLDER]: entries }
  };

  await fs.writeFile(INDEX_PATH, JSON.stringify(index, null, 2), 'utf-8');
  console.log(`✓ Index generated: ${INDEX_PATH}`);
  console.log(`✓ ${entries.length} icons, ${index.categories.length} categories`);
}

generateIndex().catch((error) => {
  console.error('Error generating index:', error);
  process.exit(1);
});
