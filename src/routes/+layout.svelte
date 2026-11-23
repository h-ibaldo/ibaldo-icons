<script>
	import '../app.css';
	import { base } from '$app/paths';
	import HeaderNavigation from '$lib/components/HeaderNavigation.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/kmw8mks.css">
</svelte:head>
<div class="min-h-screen flex flex-col justify-between">
<div>
    <!-- Skip to main content link for keyboard users -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <HeaderNavigation />
    {@render children()}
</div>

<footer class="site-footer mt-40 pb-16 px-4 flex flex-col items-center text-center">
	<p class="font-semibold text-black">Designed by Henrique Ibaldo</p>
	<nav class="mt-3 flex gap-6 text-gray-500" aria-label="Legal">
		<a href="{base}/license" class="hover:text-gray-900">License</a>
		<a href="{base}/privacy" class="hover:text-gray-900">Privacy</a>
		<a href="{base}/terms" class="hover:text-gray-900">Terms</a>
	</nav>
</footer>
</div>

<style>
	.skip-link {
		position: absolute;
		top: -40px;
		left: 0;
		background: #0900FF;
		color: white;
		padding: 8px;
		text-decoration: none;
		z-index: 100;
	}

	.site-footer {
		font-size: 0.8rem;
		line-height: 1.6;
	}

	.skip-link:focus {
		top: 0;
	}
</style>
