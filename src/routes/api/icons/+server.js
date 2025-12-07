import { json } from '@sveltejs/kit';
import iconsManifest from '$lib/icons-manifest.json';

export async function GET({ url }) {
    const category = url.searchParams.get('category');

    try {
        if (!category) {
            // Return all categories
            return json({ categories: iconsManifest.categories || [] });
        }

        // Return icons for the specified category
        if (!iconsManifest.icons || !iconsManifest.icons[category]) {
            return json({ error: 'Category not found' }, { status: 404 });
        }

        return json({ [category]: iconsManifest.icons[category] });

    } catch (error) {
        console.error('Error in icons API:', error);
        return json({ error: 'Failed to load icons', details: error.message }, { status: 500 });
    }
}