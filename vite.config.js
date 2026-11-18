import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: [
			'dissectible-dominick-unthickly.ngrok-free.dev',
			'.ngrok-free.dev',
			'.ngrok.io'
		],
		watch: {
			// Claude Code worktrees are full copies of the repo; watching them
			// overwhelms the file watcher and edits stop reloading.
			ignored: ['**/.claude/**']
		}
	},
	ssr: {
		noExternal: ['zip-a-folder']
	}
});
