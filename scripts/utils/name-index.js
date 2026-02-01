/**
 * Name Index Utility
 *
 * Tracks used component names to prevent duplicates
 * Maintains metadata/name-index.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

const NAME_INDEX_PATH = path.join(projectRoot, 'metadata', 'name-index.json');

/**
 * Load the name index from disk
 * @returns {Object} Map of component names to filenames
 */
export function loadNameIndex() {
  if (!fs.existsSync(NAME_INDEX_PATH)) {
    return {};
  }

  try {
    const content = fs.readFileSync(NAME_INDEX_PATH, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error loading name index:', error.message);
    return {};
  }
}

/**
 * Save the name index to disk
 * @param {Object} index - Map of component names to filenames
 */
export function saveNameIndex(index) {
  try {
    // Ensure metadata directory exists
    const metadataDir = path.dirname(NAME_INDEX_PATH);
    if (!fs.existsSync(metadataDir)) {
      fs.mkdirSync(metadataDir, { recursive: true });
    }

    // Write sorted index for readability
    const sorted = Object.keys(index)
      .sort()
      .reduce((acc, key) => {
        acc[key] = index[key];
        return acc;
      }, {});

    fs.writeFileSync(NAME_INDEX_PATH, JSON.stringify(sorted, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving name index:', error.message);
  }
}

/**
 * Check if a component name is already used
 * @param {string} name - Component name to check
 * @returns {boolean}
 */
export function isNameUsed(name) {
  const index = loadNameIndex();
  return name in index;
}

/**
 * Add a name to the index
 * @param {string} name - Component name
 * @param {string} filename - SVG filename
 */
export function addName(name, filename) {
  const index = loadNameIndex();
  index[name] = filename;
  saveNameIndex(index);
}

/**
 * Get all used names as an array
 * @returns {string[]}
 */
export function getAllNames() {
  const index = loadNameIndex();
  return Object.keys(index);
}

/**
 * Suggest a unique name by appending a number
 * @param {string} baseName - Base component name
 * @returns {string} Unique name
 */
export function suggestUniqueName(baseName) {
  if (!isNameUsed(baseName)) {
    return baseName;
  }

  let counter = 2;
  while (isNameUsed(`${baseName}${counter}`)) {
    counter++;
  }

  return `${baseName}${counter}`;
}

/**
 * Remove a name from the index
 * @param {string} name - Component name to remove
 */
export function removeName(name) {
  const index = loadNameIndex();
  delete index[name];
  saveNameIndex(index);
}

/**
 * Get stats about the name index
 * @returns {{total: number, names: string[]}}
 */
export function getStats() {
  const names = getAllNames();
  return {
    total: names.length,
    names: names.slice(0, 10) // Sample of first 10 names
  };
}
