import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function formatIconName(name) {
    name = name.replace(/alt(\d+)/i, 'Alternative $1')
               .replace(/opt(\d+)/i, 'Option $1');
    
    return name.split(/[-_\s]/).map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

async function generateIndex() {
    const staticIconsDir = join(__dirname, '..', 'static', 'icons');
    const optimizedIconsDir = join(staticIconsDir, 'optimized');
    const indexPath = join(__dirname, '..', 'static', 'icons-index.json');

    // Folders to merge into 'popular' category (legacy)
    const popularFolders = ['popular', 'application-1', 'application-2'];

    try {
        console.log('Generating icons index...');

        const index = {
            categories: [],
            icons: {}
        };

        // Collect all icons for the 'popular' category (legacy)
        const popularIcons = [];

        // 1. Scan optimized directory (new icons from src/icons/raw/)
        if (await fs.stat(optimizedIconsDir).catch(() => null)) {
            console.log('Scanning optimized icons (new system)...');
            const optimizedCategories = await fs.readdir(optimizedIconsDir);

            for (const category of optimizedCategories) {
                if (category === '.DS_Store' || category.startsWith('.')) continue;

                const categoryPath = join(optimizedIconsDir, category);
                const stats = await fs.stat(categoryPath);

                if (!stats.isDirectory()) continue;

                const files = await fs.readdir(categoryPath);
                const icons = [];

                for (const file of files) {
                    if (!file.endsWith('.svg')) continue;

                    const rawName = file.replace('.svg', '');
                    const name = formatIconName(rawName);

                    icons.push({
                        name,
                        path: `/icons/optimized/${category}/${file}`,
                        filename: file
                    });
                }

                if (icons.length > 0) {
                    if (!index.icons[category]) {
                        index.categories.push(category);
                        index.icons[category] = [];
                    }
                    index.icons[category].push(...icons);
                    console.log(`  - ${category}: ${icons.length} icons (optimized)`);
                }
            }
        }

        // 2. Scan legacy static/icons directory (old icons)
        const legacyCategories = await fs.readdir(staticIconsDir);

        for (const category of legacyCategories) {
            if (category === '.DS_Store' || category.startsWith('.') || category === 'optimized' || category === 'test-optimized') continue;

            const categoryPath = join(staticIconsDir, category);
            const stats = await fs.stat(categoryPath);

            if (!stats.isDirectory()) continue;

            const files = await fs.readdir(categoryPath);
            const icons = [];

            for (const file of files) {
                if (!file.endsWith('.svg')) continue;

                const rawName = file.replace('.svg', '');
                const name = formatIconName(rawName);

                icons.push({
                    name,
                    path: `/icons/${category}/${file}`,
                    filename: file
                });
            }

            // If this folder should be merged into 'popular', add to popularIcons
            if (popularFolders.includes(category)) {
                popularIcons.push(...icons);
                console.log(`  - ${category}: ${icons.length} icons (legacy, merged into 'popular')`);
            } else {
                // Otherwise, create a separate category
                if (!index.categories.includes(category)) {
                    index.categories.push(category);
                }
                if (!index.icons[category]) {
                    index.icons[category] = [];
                }
                index.icons[category].push(...icons);
                console.log(`  - ${category}: ${icons.length} icons (legacy)`);
            }
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

        await fs.writeFile(indexPath, JSON.stringify(index, null, 2), 'utf-8');
        console.log(`✓ Index generated: ${indexPath}`);
        console.log(`✓ Total categories: ${index.categories.length}`);
        console.log(`✓ Total icons: ${Object.values(index.icons).reduce((sum, icons) => sum + icons.length, 0)}`);

    } catch (error) {
        console.error('Error generating index:', error);
        process.exit(1);
    }
}

generateIndex();
