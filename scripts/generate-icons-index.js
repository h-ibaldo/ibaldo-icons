import { readdir, stat, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function formatIconName(name) {
    // Replace altX with Alternative X and optX with Option X
    name = name.replace(/alt(\d+)/i, 'Alternative $1')
               .replace(/opt(\d+)/i, 'Option $1');
    
    // Convert to title case by splitting on spaces and capitalizing each word
    return name.split(/[-_\s]/).map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

async function generateIconsIndex() {
    const iconsDir = join(__dirname, '..', 'static', 'icons');
    const outputPath = join(__dirname, '..', 'static', 'icons-index.json');
    
    try {
        const categories = [];
        const icons = {};
        
        // Read all directories in the icons folder
        const entries = await readdir(iconsDir);
        
        for (const entry of entries) {
            // Skip hidden files and system files
            if (entry.startsWith('.') || entry === 'DS_Store') continue;
            
            const entryPath = join(iconsDir, entry);
            const stats = await stat(entryPath);
            
            // Only process directories
            if (!stats.isDirectory()) continue;
            
            categories.push(entry);
            
            // Read all SVG files in this category directory
            const files = await readdir(entryPath);
            const categoryIcons = [];
            
            for (const file of files) {
                if (!file.endsWith('.svg')) continue;
                
                const rawName = file.replace('.svg', '');
                const name = formatIconName(rawName);
                const path = `/icons/${entry}/${file}`;
                
                categoryIcons.push({
                    name,
                    path,
                    filename: file
                });
            }
            
            // Sort icons by name
            categoryIcons.sort((a, b) => a.name.localeCompare(b.name));
            icons[entry] = categoryIcons;
        }
        
        // Sort categories
        categories.sort();
        
        // Create the index object
        const index = {
            categories,
            icons
        };
        
        // Write to file
        await writeFile(outputPath, JSON.stringify(index, null, 2), 'utf-8');
        
        console.log(`✓ Generated icons-index.json with ${categories.length} categories and ${Object.values(icons).reduce((sum, arr) => sum + arr.length, 0)} icons`);
        
    } catch (error) {
        console.error('Error generating icons index:', error);
        process.exit(1);
    }
}

generateIconsIndex();
