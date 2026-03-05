import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../screenshots');

const BASE_URL = 'http://localhost:5175';

const PAGES = [
	{ name: 'home', path: '/' },
	{ name: 'about', path: '/about' },
	{ name: 'packages', path: '/packages' },
	{ name: 'license', path: '/license' },
	{ name: 'terms', path: '/terms' },
	{ name: 'privacy', path: '/privacy' },
	{ name: 'request-icon', path: '/request-icon' },
];

const VIEWPORTS = [
	{ name: 'desktop', width: 1440, height: 900 },
	{ name: 'mobile', width: 390, height: 844 },
];

async function main() {
	await mkdir(OUT_DIR, { recursive: true });

	const browser = await chromium.launch();

	for (const viewport of VIEWPORTS) {
		const context = await browser.newContext({
			viewport: { width: viewport.width, height: viewport.height },
		});
		const page = await context.newPage();

		for (const route of PAGES) {
			const url = `${BASE_URL}${route.path}`;
			console.log(`Screenshotting ${route.name} (${viewport.name})...`);

			await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
			// Wait a bit for animations/fonts to settle
			await page.waitForTimeout(800);

			const filename = `${route.name}-${viewport.name}.png`;
			await page.screenshot({
				path: path.join(OUT_DIR, filename),
				fullPage: true,
			});
			console.log(`  → screenshots/${filename}`);
		}

		await context.close();
	}

	await browser.close();
	console.log('\nDone! All screenshots saved to ./screenshots/');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
