/**
 * Icon names: the single place that decides each icon's component name.
 *
 * The name comes from metadata/icons/<filename>.json ("name" field).
 * The site index, the React package and the Svelte package all call
 * loadIconNames(), so an icon has the same name everywhere.
 *
 * Icons without metadata, invalid names and duplicate names still get a
 * deterministic, valid name so builds never break, and each case is reported
 * so it can be fixed in the metadata (see NAMING-GUIDE.md).
 *
 * CommonJS on purpose: the package build scripts are CommonJS, and ESM scripts
 * can import it too (`import iconNames from './utils/icon-names.cjs'`).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const ICONS_DIR = path.join(ROOT, 'static', 'icons', 'optimized');
const METADATA_DIR = path.join(ROOT, 'metadata', 'icons');
const VALID_NAME = /^[A-Z][A-Za-z0-9]*$/;

function pascalFromFilename(filename) {
  return filename
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

function toValidName(name) {
  const cleaned = String(name || '').replace(/[^A-Za-z0-9]/g, '');
  if (!cleaned) return 'Icon';
  if (/^[0-9]/.test(cleaned)) return 'Icon' + cleaned;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function readMetadata(filename) {
  const file = path.join(METADATA_DIR, `${filename}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * @returns {{
 *   icons: Array<{ filename: string, file: string, name: string, aliases: string[], metadata: object|null }>,
 *   byFilename: Map<string, string>,
 *   aliases: Array<{ alias: string, name: string, filename: string }>,
 *   problems: string[]
 * }}
 */
function loadIconNames({ quiet = false } = {}) {
  const filenames = fs
    .readdirSync(ICONS_DIR)
    .filter((f) => f.endsWith('.svg'))
    .map((f) => f.slice(0, -4))
    // Natural sort keeps the result stable from run to run
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const taken = new Set();
  const byFilename = new Map();
  const icons = [];
  const problems = [];

  for (const filename of filenames) {
    const metadata = readMetadata(filename);
    let name;
    if (!metadata || !metadata.name) {
      name = toValidName(pascalFromFilename(filename));
      problems.push(`${filename}: no metadata name, using ${name}`);
    } else if (!VALID_NAME.test(metadata.name)) {
      name = toValidName(metadata.name);
      problems.push(`${filename}: invalid name "${metadata.name}", using ${name}`);
    } else {
      name = metadata.name;
    }

    if (taken.has(name)) {
      let n = 2;
      while (taken.has(`${name}${n}`)) n++;
      problems.push(`${filename}: name "${name}" already used, using ${name}${n}`);
      name = `${name}${n}`;
    }

    taken.add(name);
    byFilename.set(filename, name);
    icons.push({ filename, file: path.join(ICONS_DIR, `${filename}.svg`), name, metadata });
  }

  // Aliases: old names kept for one major version (NAMING-GUIDE.md, "Renaming").
  // An alias is dropped if it is not a valid name, equals a current name, or
  // was already claimed by another icon.
  const aliasOwner = new Map();
  for (const icon of icons) {
    icon.aliases = [];
    for (const alias of (icon.metadata && icon.metadata.aliases) || []) {
      if (!VALID_NAME.test(alias)) {
        problems.push(`${icon.filename}: invalid alias "${alias}", skipped`);
      } else if (taken.has(alias)) {
        problems.push(`${icon.filename}: alias "${alias}" is a current icon name, skipped`);
      } else if (aliasOwner.has(alias)) {
        problems.push(`${icon.filename}: alias "${alias}" already used by ${aliasOwner.get(alias).filename}, skipped`);
      } else {
        aliasOwner.set(alias, icon);
        icon.aliases.push(alias);
      }
    }
  }

  if (!quiet && problems.length) {
    console.warn(`\n⚠️  ${problems.length} naming problems (fix in metadata/icons/, see NAMING-GUIDE.md):`);
    for (const p of problems) console.warn(`   - ${p}`);
    console.warn('');
  }

  // aliases: [{ alias, name, filename }], sorted by alias
  const aliases = [...aliasOwner.entries()]
    .map(([alias, icon]) => ({ alias, name: icon.name, filename: icon.filename }))
    .sort((a, b) => a.alias.localeCompare(b.alias));

  return { icons, byFilename, aliases, problems };
}

module.exports = { loadIconNames, ICONS_DIR, METADATA_DIR };
