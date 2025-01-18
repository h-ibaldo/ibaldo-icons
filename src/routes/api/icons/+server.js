import { json } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET({ url }) {
    const category = url.searchParams.get('category');
    const iconsDir = 'static/icons';

    try {
        if (!category) {
            // Return just the list of available categories
            const categories = await fs.readdir(iconsDir);
            const validCategories = (await Promise.all(
                categories.map(async (cat) => {
                    const stats = await fs.stat(join(iconsDir, cat));
                    console.log(cat);
                    return stats.isDirectory() ? cat : null;
                })
            )).filter(Boolean);
            return json({ categories: validCategories });
        }

        // Read specific category
        const categoryPath = join(iconsDir, category);
        const stats = await fs.stat(categoryPath);
        
        if (!stats.isDirectory()) {
            return json({ error: 'Category not found' }, { status: 404 });
        }

        // Read all SVG files in the category folder
        const files = await fs.readdir(categoryPath);
        const icons = await Promise.all(
            files
                .filter(file => file.endsWith('.svg'))
                .map(async (file) => {
                    const name = file.replace('.svg', '');
                    const svg = await fs.readFile(join(categoryPath, file), 'utf-8');
                    return { name, svg };
                })
        );

        return json({ [category]: icons });
    } catch (error) {
        console.error('Error reading icons:', error);
        return json({ error: 'Failed to load icons' }, { status: 500 });
    }
}