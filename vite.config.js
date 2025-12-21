import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['zip-a-folder']
	},
	server: {
		allowedHosts: ['dissectible-dominick-unthickly.ngrok-free.dev']
	}
});
