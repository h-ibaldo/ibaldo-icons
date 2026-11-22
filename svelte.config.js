import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Served at ibald.ooo/icons (ibald.ooo rewrites /icons/* to this project)
		paths: { base: '/icons' },
		adapter: vercel({ runtime: 'nodejs24.x' }),
		alias: {
			// The site's UI icons come from the library's own Svelte package
			$icons: 'packages/icon-design-svelte/dist/icons'
		}
	}
};

export default config;
