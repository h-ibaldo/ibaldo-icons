import { json } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let iconsManifestCache = null;

async function loadManifest() {
    if (iconsManifestCache) {
        return iconsManifestCache;
    }
    
    try {
        // Try multiple possible paths (dev, production, static folder)
        const possiblePaths = [
            join(process.cwd(), 'static', 'icons-manifest.json'), // Static folder (always accessible)
            join(process.cwd(), 'src', 'lib', 'icons-manifest.json'), // Dev
            join(process.cwd(), '.svelte-kit', 'output', 'server', 'app', 'lib', 'icons-manifest.json'), // Build output
            join(__dirname, '..', '..', 'lib', 'icons-manifest.json'), // Relative from build
            join(process.cwd(), 'lib', 'icons-manifest.json')
        ];
        
        let lastError = null;
        for (const manifestPath of possiblePaths) {
            try {
                const content = await fs.readFile(manifestPath, 'utf-8');
                iconsManifestCache = JSON.parse(content);
                console.log('✓ Loaded manifest from:', manifestPath);
                return iconsManifestCache;
            } catch (e) {
                lastError = e;
                // Try next path
                continue;
            }
        }
        
        // If all paths failed, throw with details
        throw new Error(`Manifest not found. Tried: ${possiblePaths.join(', ')}. Last error: ${lastError?.message || 'unknown'}`);
    } catch (error) {
        console.error('Error loading manifest:', error);
        throw error;
    }
}

export async function GET({ url }) {
    const category = url.searchParams.get('category');

    try {
        const manifest = await loadManifest();
        
        if (!category) {
            // Return all categories
            return json({ categories: manifest.categories || [] });
        }

        // Return icons for the specified category
        if (!manifest.icons || !manifest.icons[category]) {
            return json({ error: 'Category not found' }, { status: 404 });
        }

        return json({ [category]: manifest.icons[category] });

    } catch (error) {
        console.error('Error in icons API:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            cwd: process.cwd(),
            __dirname: __dirname
        });
        return json({ error: 'Failed to load icons', details: error.message }, { status: 500 });
    }
}