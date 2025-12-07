import { json } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import { join } from 'path';

function formatIconName(name) {
    // Replace altX with Alternative X and optX with Option X
    name = name.replace(/alt(\d+)/i, 'Alternative $1')
               .replace(/opt(\d+)/i, 'Option $1');
    
    // Convert to title case by splitting on spaces and capitalizing each word
    return name.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

export async function GET({ url }) {
    const category = url.searchParams.get('category');
    // Vite dev server cwd is project root.
    const iconsDir = 'static/icons';

    try {
        if (!category) {
            const categories = await fs.readdir(iconsDir);
            
            const validCategories = [];
            for (const cat of categories) {
                if (cat === '.DS_Store') continue;
                
                try {
                    const stats = await fs.stat(join(iconsDir, cat));
                    if (stats.isDirectory()) {
                        validCategories.push(cat);
                    }
                } catch (err) {
                    console.error(`Error processing category ${cat}:`, err);
                }
            }
            
            return json({ categories: validCategories });
        }

        const categoryPath = join(iconsDir, category);
        
        try {
            const stats = await fs.stat(categoryPath);
            if (!stats.isDirectory()) {
                return json({ error: 'Category not found' }, { status: 404 });
            }
        } catch (e) {
            return json({ error: 'Category not found' }, { status: 404 });
        }

        const files = await fs.readdir(categoryPath);
        
        const icons = [];
        for (const file of files) {
            if (!file.endsWith('.svg')) continue;
            
            const rawName = file.replace('.svg', '');
            const name = formatIconName(rawName);
            const content = await fs.readFile(join(categoryPath, file), 'utf-8');
            icons.push({ name, svg: content });
        }
        
        return json({ [category]: icons });

    } catch (error) {
        console.error('Error in icons API:', error);
        return json({ error: 'Failed to load icons' }, { status: 500 });
    }
}