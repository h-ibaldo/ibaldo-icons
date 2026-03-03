#!/usr/bin/env node

/**
 * Audit Icons Index
 *
 * Compares SVG files on disk with the icons index to find:
 * 1. Icons in optimized/ that are missing from the index (dropped icons)
 * 2. Naming collisions that would cause drops (with current smart naming)
 *
 * Run: node scripts/audit-icons-index.js
 */

import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { generateSmartName } from './utils/smart-naming.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const optimizedDir = join(projectRoot, 'static', 'icons', 'optimized');
const indexPath = join(projectRoot, 'static', 'icons-index.json');

async function audit() {
    console.log('\n📋 Icons Index Audit\n' + '='.repeat(50));

    const files = (await fs.readdir(optimizedDir)).filter((f) => f.endsWith('.svg'));
    const rawNames = files.map((f) => f.replace('.svg', ''));

    // 1. Load index and find missing
    let index = { icons: {} };
    try {
        index = JSON.parse(await fs.readFile(indexPath, 'utf-8'));
    } catch (e) {
        console.error('Could not load icons-index.json:', e.message);
        process.exit(1);
    }

    const indexedPaths = new Set();
    for (const icons of Object.values(index.icons || {})) {
        for (const icon of icons) {
            indexedPaths.add(icon.path);
        }
    }

    const missing = rawNames.filter(
        (r) => !indexedPaths.has(`/icons/optimized/${r}.svg`)
    );

    if (missing.length > 0) {
        console.log(`\n❌ ${missing.length} icons MISSING from index:`);
        missing.slice(0, 30).forEach((f) => console.log(`   - ${f}.svg`));
        if (missing.length > 30) {
            console.log(`   ... and ${missing.length - 30} more`);
        }
    } else {
        console.log('\n✓ All icons from optimized/ are in the index');
    }

    // 2. Find naming collisions (files that would get same smart name)
    const nameToFiles = {};
    for (const r of rawNames) {
        const n = generateSmartName(r);
        if (!nameToFiles[n]) nameToFiles[n] = [];
        nameToFiles[n].push(r);
    }

    const collisions = Object.entries(nameToFiles).filter(
        ([, arr]) => arr.length > 1
    );
    const wouldDrop = collisions.reduce((s, [, arr]) => s + arr.length - 1, 0);

    if (collisions.length > 0) {
        console.log(
            `\n⚠️  ${collisions.length} naming collision groups (${wouldDrop} icons would be dropped without resolution):`
        );
        collisions.slice(0, 15).forEach(([name, arr]) => {
            console.log(`   ${name}: ${arr.length} files`);
            arr.slice(0, 3).forEach((f) => console.log(`      - ${f}.svg`));
            if (arr.length > 3) console.log(`      ... and ${arr.length - 3} more`);
        });
        if (collisions.length > 15) {
            console.log(`   ... and ${collisions.length - 15} more collision groups`);
        }
    } else {
        console.log('\n✓ No naming collisions');
    }

    console.log('\n' + '='.repeat(50));
    console.log(`Total: ${files.length} files in optimized/`);
    console.log(`Indexed: ${indexedPaths.size} unique paths in index`);
    console.log('='.repeat(50) + '\n');

    process.exit(missing.length > 0 ? 1 : 0);
}

audit().catch((e) => {
    console.error(e);
    process.exit(1);
});
