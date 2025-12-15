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
    const iconsDir = join(__dirname, '..', 'static', 'icons');
    const indexPath = join(__dirname, '..', 'static', 'icons-index.json');
    
    // Folders to merge into 'popular' category
    const popularFolders = ['popular', 'application-1', 'application-2'];
    
    try {
        console.log('Generating icons index...');
        
        const categories = await fs.readdir(iconsDir);
        const index = {
            categories: [],
            icons: {}
        };
        
        // Collect all icons for the 'popular' category
        const popularIcons = [];
        
        for (const category of categories) {
            if (category === '.DS_Store' || category.startsWith('.')) continue;
            
            const categoryPath = join(iconsDir, category);
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
                console.log(`  - ${category}: ${icons.length} icons (will be merged into 'popular')`);
            } else {
                // Otherwise, create a separate category
                index.categories.push(category);
                icons.sort((a, b) => a.name.localeCompare(b.name));
                index.icons[category] = icons;
                console.log(`  - ${category}: ${icons.length} icons`);
            }
        }
        
        // Add 'popular' category with all merged icons
        if (popularIcons.length > 0) {
            popularIcons.sort((a, b) => a.name.localeCompare(b.name));
            index.categories.push('popular');
            index.icons['popular'] = popularIcons;
            console.log(`  - popular: ${popularIcons.length} icons (merged from ${popularFolders.join(', ')})`);
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
