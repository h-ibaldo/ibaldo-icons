import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function formatIconName(name) {
    // Replace altX with Alternative X and optX with Option X
    name = name.replace(/alt(\d+)/i, 'Alternative $1')
               .replace(/opt(\d+)/i, 'Option $1');
    
    // Convert to title case by splitting on spaces and capitalizing each word
    return name.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

async function generateManifest() {
    const iconsDir = join(__dirname, '..', 'static', 'icons');
    const manifestPath = join(__dirname, '..', 'src', 'lib', 'icons-manifest.json');
    
    try {
        console.log('Generating icons manifest...');
        
        // Read all categories (directories)
        const categories = await fs.readdir(iconsDir);
        const manifest = {
            categories: [],
            icons: {}
        };
        
        for (const category of categories) {
            if (category === '.DS_Store') continue;
            
            const categoryPath = join(iconsDir, category);
            const stats = await fs.stat(categoryPath);
            
            if (!stats.isDirectory()) continue;
            
            manifest.categories.push(category);
            
            // Read all SVG files in this category
            const files = await fs.readdir(categoryPath);
            const icons = [];
            
            for (const file of files) {
                if (!file.endsWith('.svg')) continue;
                
                const rawName = file.replace('.svg', '');
                const name = formatIconName(rawName);
                const content = await fs.readFile(join(categoryPath, file), 'utf-8');
                
                icons.push({ name, svg: content });
            }
            
            manifest.icons[category] = icons;
            console.log(`  - ${category}: ${icons.length} icons`);
        }
        
        // Write manifest file
        await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
        console.log(`✓ Manifest generated: ${manifestPath}`);
        console.log(`✓ Total categories: ${manifest.categories.length}`);
        console.log(`✓ Total icons: ${Object.values(manifest.icons).reduce((sum, icons) => sum + icons.length, 0)}`);
        
    } catch (error) {
        console.error('Error generating manifest:', error);
        process.exit(1);
    }
}

generateManifest();

