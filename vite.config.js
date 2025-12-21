import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: [
			'dissectible-dominick-unthickly.ngrok-free.dev',
			'.ngrok-free.dev',
			'.ngrok.io'
		]
	},
	ssr: {
		noExternal: ['zip-a-folder']
	}
});
