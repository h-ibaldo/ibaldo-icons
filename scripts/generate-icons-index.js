import 'dotenv/config';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { generateSmartName, filenameToUniquePascalCase } from './utils/smart-naming.js';
import { generateAINames } from './utils/ai-naming.js';
import { generateMetadata, saveMetadata, clearOldMetadata } from './utils/ai-metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Choose naming strategy: 'ai' or 'algorithm'
const NAMING_STRATEGY = process.env.NAMING_STRATEGY || 'ai';

// Generate metadata alongside names
const GENERATE_METADATA = process.env.GENERATE_METADATA !== 'false';

function formatIconName(name) {
    name = name.replace(/alt(\d+)/i, 'Alternative $1')
               .replace(/opt(\d+)/i, 'Option $1');

    return name.split(/[-_\s]/).map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

/**
 * Load metadata for an icon from the metadata directory
 * @param {string} filename - SVG filename (without extension)
 * @returns {Promise<object|null>} Metadata object or null if not found
 */
async function loadIconMetadata(filename) {
    const metadataPath = join(__dirname, '..', 'metadata', 'icons', `${filename}.json`);
    try {
        const content = await fs.readFile(metadataPath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        // Metadata file doesn't exist yet - that's ok
        return null;
    }
}

async function generateIndex() {
    const staticIconsDir = join(__dirname, '..', 'static', 'icons');
    const optimizedIconsDir = join(staticIconsDir, 'optimized');
    const indexPath = join(__dirname, '..', 'static', 'icons-index.json');

    // Folders to merge into 'popular' category (legacy)
    const popularFolders = ['popular', 'application-1', 'application-2'];

    try {
        console.log(`Generating icons index... (using ${NAMING_STRATEGY} naming)`);

        const index = {
            categories: [],
            icons: {}
        };

        // Collect all icons for the 'popular' category (legacy)
        const popularIcons = [];

        // Collect all filenames for batch AI naming
        const allFilenames = [];
        const filenameToCategory = new Map();
        const filenameToPath = new Map();
        const existingNames = {};

        // 1. Scan optimized directory (flat - no category subfolders)
        if (await fs.stat(optimizedIconsDir).catch(() => null)) {
            console.log('Scanning optimized icons (new system)...');
            const optimizedFiles = await fs.readdir(optimizedIconsDir);
            let optimizedCount = 0;

            for (const file of optimizedFiles) {
                if (!file.endsWith('.svg')) continue;

                const rawName = file.replace('.svg', '');
                allFilenames.push(rawName);
                filenameToCategory.set(rawName, 'optimized');
                filenameToPath.set(rawName, `/icons/optimized/${file}`);
                optimizedCount++;
            }

            console.log(`  - optimized: ${optimizedCount} icons`);
        }

        // 2. Scan legacy static/icons directory (old icons)
        const legacyCategories = await fs.readdir(staticIconsDir);

        for (const category of legacyCategories) {
            if (category === '.DS_Store' || category.startsWith('.') || category === 'optimized' || category === 'test-optimized') continue;

            const categoryPath = join(staticIconsDir, category);
            const stats = await fs.stat(categoryPath);

            if (!stats.isDirectory()) continue;

            const files = await fs.readdir(categoryPath);

            for (const file of files) {
                if (!file.endsWith('.svg')) continue;

                const rawName = file.replace('.svg', '');
                allFilenames.push(rawName);
                filenameToCategory.set(rawName, category);
                filenameToPath.set(rawName, `/icons/${category}/${file}`);
            }

            console.log(`  - ${category}: ${files.filter(f => f.endsWith('.svg')).length} icons (legacy)`);
        }

        // Generate names using chosen strategy
        let nameMap = {};
        if (NAMING_STRATEGY === 'ai' && process.env.ANTHROPIC_API_KEY) {
            console.log('\n🤖 Using AI naming strategy...');
            nameMap = await generateAINames(allFilenames, existingNames);
        } else {
            if (NAMING_STRATEGY === 'ai' && !process.env.ANTHROPIC_API_KEY) {
                console.warn('⚠️  ANTHROPIC_API_KEY not found, falling back to algorithm naming');
            }
            console.log('\n⚙️  Using algorithm naming strategy...');
            for (const filename of allFilenames) {
                nameMap[filename] = generateSmartName(filename);
            }
        }

        // Build icon entries with generated names
        // Track seen names - when collision occurs, resolve with unique name (never drop icons)
        const seenNames = new Set();
        const resolvedCollisions = [];
        const filenameToFinalName = new Map();

        // Pre-load all metadata in parallel for performance
        const metadataMap = {};
        await Promise.all(allFilenames.map(async (filename) => {
            const meta = await loadIconMetadata(filename);
            if (meta) metadataMap[filename] = meta;
        }));

        // Collect all semantic categories from metadata
        const allMetaCategories = new Set();
        for (const meta of Object.values(metadataMap)) {
            if (Array.isArray(meta.categories)) {
                for (const c of meta.categories) allMetaCategories.add(c);
            }
        }

        for (const filename of allFilenames) {
            let name = nameMap[filename] || generateSmartName(filename);
            const folderCategory = filenameToCategory.get(filename);
            const path = filenameToPath.get(filename);

            // Resolve name collisions - never drop icons
            if (seenNames.has(name)) {
                let resolvedName = filenameToUniquePascalCase(filename);
                let suffix = 1;
                while (seenNames.has(resolvedName)) {
                    resolvedName = filenameToUniquePascalCase(filename) + String(suffix);
                    suffix++;
                }
                resolvedCollisions.push({ from: name, to: resolvedName, filename });
                name = resolvedName;
            }
            seenNames.add(name);
            filenameToFinalName.set(filename, name);

            // Convert PascalCase to Sentence case for display
            const displayName = name.replace(/([A-Z])/g, ' $1').trim()
                .replace(/(\d+)/g, ' $1').trim()
                .replace(/\s+/g, ' ');
            const sentenceCase = displayName.charAt(0).toUpperCase() + displayName.slice(1).toLowerCase();

            const meta = metadataMap[filename];

            // Use semantic categories from metadata if available, fallback to folder
            const semanticCategories = (meta && Array.isArray(meta.categories) && meta.categories.length > 0)
                ? meta.categories
                : [folderCategory];

            const iconEntry = {
                name,
                displayName: sentenceCase,
                path,
                filename: filename + '.svg',
                category: folderCategory,       // folder origin (for backwards compat)
                categories: semanticCategories  // semantic multi-label categories
            };

            // Attach existing metadata search fields if available
            if (meta) {
                if (meta.tags) iconEntry.tags = meta.tags;
                if (meta.description) iconEntry.description = meta.description;
                iconEntry.searchText = [
                    name,
                    sentenceCase,
                    ...(meta.tags || []),
                    meta.description || '',
                    ...semanticCategories
                ].join(' ').toLowerCase();
            }

            // If this folder should be merged into 'popular', add to popularIcons
            if (popularFolders.includes(folderCategory)) {
                popularIcons.push(iconEntry);
            } else {
                // Otherwise, create a separate category
                if (!index.categories.includes(folderCategory)) {
                    index.categories.push(folderCategory);
                }
                if (!index.icons[folderCategory]) {
                    index.icons[folderCategory] = [];
                }
                index.icons[folderCategory].push(iconEntry);
            }
        }

        // Replace folder-based categories list with semantic metadata categories
        if (allMetaCategories.size > 0) {
            index.categories = [...allMetaCategories].sort();
            console.log(`\n✓ Using ${index.categories.length} semantic categories from metadata:`, index.categories.join(', '));
        }

        if (resolvedCollisions.length > 0) {
            console.log(`\n✓ Resolved ${resolvedCollisions.length} name collisions (no icons dropped)`);
        }

        // Add 'popular' category with all merged legacy icons
        if (popularIcons.length > 0) {
            popularIcons.sort((a, b) => a.name.localeCompare(b.name));
            index.categories.push('popular');
            index.icons['popular'] = popularIcons;
            console.log(`  - popular: ${popularIcons.length} icons (legacy merged from ${popularFolders.join(', ')})`);
        }

        // Sort all category icons
        for (const category in index.icons) {
            index.icons[category].sort((a, b) => a.name.localeCompare(b.name));
        }

        // Sort categories
        index.categories.sort();

        // Generate metadata if enabled
        if (GENERATE_METADATA && NAMING_STRATEGY === 'ai' && process.env.ANTHROPIC_API_KEY) {
            console.log('\n📝 Generating fresh metadata for all icons...');

            // Clear old metadata first
            await clearOldMetadata();

            // Collect all unique icons with their names (includes resolved collision names)
            const iconsForMetadata = [];
            const iconMap = {}; // filename -> icon data

            for (const filename of allFilenames) {
                const name = filenameToFinalName.get(filename);
                if (name && !iconMap[filename]) {
                    const iconData = {
                        filename: filename + '.svg',
                        name: name,
                        path: filenameToPath.get(filename)
                    };
                    iconsForMetadata.push(iconData);
                    iconMap[filename] = iconData;
                }
            }

            // Generate metadata via AI
            const metadata = await generateMetadata(iconsForMetadata);

            // Save metadata files
            await saveMetadata(metadata, iconMap);

            console.log('✓ Metadata generation complete!');

            // Add metadata to index for enhanced search
            console.log('\n🔍 Adding metadata to index for enhanced search...');
            for (const category in index.icons) {
                for (const icon of index.icons[category]) {
                    const filename = icon.filename.replace('.svg', '');
                    const iconMetadata = metadata[filename];

                    if (iconMetadata) {
                        icon.tags = iconMetadata.tags;
                        icon.description = iconMetadata.description;
                        icon.searchText = [
                            icon.name,
                            icon.displayName,
                            ...iconMetadata.tags,
                            iconMetadata.description
                        ].join(' ').toLowerCase();
                    }
                }
            }
            console.log('✓ Enhanced search metadata added to index');
        } else if (GENERATE_METADATA && NAMING_STRATEGY === 'ai') {
            console.log('\n⚠️  Skipping metadata generation (ANTHROPIC_API_KEY not found)');
        }

        // Validation: ensure every source file is in the index (no icons dropped)
        const indexedPaths = new Set();
        for (const icons of Object.values(index.icons)) {
            for (const icon of icons) {
                indexedPaths.add(icon.path);
                indexedPaths.add(icon.filename);
            }
        }
        const missingFromIndex = allFilenames.filter((f) => !indexedPaths.has(filenameToPath.get(f)));
        if (missingFromIndex.length > 0) {
            console.error(`\n❌ Validation failed: ${missingFromIndex.length} icons missing from index:`);
            missingFromIndex.slice(0, 20).forEach((f) => console.error(`   - ${f}.svg`));
            if (missingFromIndex.length > 20) {
                console.error(`   ... and ${missingFromIndex.length - 20} more`);
            }
            process.exit(1);
        }

        await fs.writeFile(indexPath, JSON.stringify(index, null, 2), 'utf-8');
        console.log(`✓ Index generated: ${indexPath}`);
        console.log(`✓ Total categories: ${index.categories.length}`);
        const totalIcons = Object.values(index.icons).reduce((sum, icons) => sum + icons.length, 0);
        console.log(`✓ Total icons: ${totalIcons} (validated: all ${allFilenames.length} source files included)`);

    } catch (error) {
        console.error('Error generating index:', error);
        process.exit(1);
    }
}

generateIndex();
