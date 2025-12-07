import { json } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import { join } from 'path';

let indexCache = null;

async function loadIndex() {
    if (indexCache) {
        return indexCache;
    }
    
    try {
        // The index is in the static folder, which should be accessible
        const indexPath = join(process.cwd(), 'static', 'icons-index.json');
        const content = await fs.readFile(indexPath, 'utf-8');
        indexCache = JSON.parse(content);
        return indexCache;
    } catch (error) {
        console.error('Error loading index:', error);
        throw error;
    }
}

export async function GET({ url }) {
    const category = url.searchParams.get('category');

    try {
        const index = await loadIndex();
        
        if (!category) {
            // Return all categories
            return json({ categories: index.categories || [] });
        }

        // Return icons for the specified category
        if (!index.icons || !index.icons[category]) {
            return json({ error: 'Category not found' }, { status: 404 });
        }

        return json({ [category]: index.icons[category] });

    } catch (error) {
        console.error('Error in icons API:', error);
        return json({ error: 'Failed to load icons', details: error.message }, { status: 500 });
    }
}