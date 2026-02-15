/**
 * Centralized configuration for icon-design build system
 *
 * This file contains all configuration constants used across the build scripts
 * to avoid duplication and make it easy to update values in one place.
 */

export const CONFIG = {
  icon: {
    viewBox: '0 0 24 24',
    strokeWidth: 1.5,
    hasStroke: true,
    hasFill: false
  },

  ai: {
    models: {
      naming: 'claude-haiku-4-5-20251001',
      metadata: 'claude-haiku-4-5-20251001'
    },
    batchSizes: {
      naming: 20,
      metadata: 15,
      general: 10
    },
    temperature: 0.3
  },

  svg: {
    defaultSize: 512,
    decimalPrecision: 2
  },

  paths: {
    iconsRaw: 'src/icons/raw',
    iconsOptimized: 'static/icons/optimized',
    metadata: 'metadata/icons',
    nameIndex: 'metadata/name-index.json'
  }
};

export const ICON_CATEGORIES = [
  'interface',
  'arrows',
  'communication',
  'media',
  'files',
  'business',
  'social',
  'weather',
  'devices',
  'health',
  'education',
  'transportation',
  'food',
  'people',
  'accessibility',
  'nature',
  'sports',
  'development',
  'security',
  'shopping',
  'time',
  'location'
];

export const ACCESSIBILITY_ROLES = [
  'decorative',
  'informative',
  'interactive'
];
