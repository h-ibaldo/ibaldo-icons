import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({
			runtime: 'nodejs20.x'
		}),
		alias: {
			// The site's UI icons come from the library's own Svelte package
			$icons: 'packages/icon-design-svelte/dist/icons'
		}
	}
};

export default config;
