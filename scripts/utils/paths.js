/**
 * Path utilities for icon-design scripts
 *
 * Provides helper functions for resolving paths consistently across all scripts.
 * This eliminates boilerplate code that was repeated in multiple files.
 */

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

/**
 * Get standardized project paths
 * @param {string} importMetaUrl - import.meta.url from the calling script
 * @returns {Object} Object containing __filename, __dirname, and projectRoot paths
 */
export function getProjectPaths(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = dirname(__filename);
  const projectRoot = resolve(__dirname, '..', '..');

  return {
    __filename,
    __dirname,
    projectRoot
  };
}
