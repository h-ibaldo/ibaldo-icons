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

<footer class="mt-20 pb-8 px-4 sm:px-14 text-start leading-[2] w-100 flex items-center justify-start text-xs text-gray-600">
	<p>
		Designed by Henrique Ibaldo · <a href="{base}/license" class="hover:text-gray-900 underline">License</a> · <a href="{base}/privacy" class="hover:text-gray-900 underline">Privacy</a> · <a href="{base}/terms" class="hover:text-gray-900 underline">Terms</a>
	</p>
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

	.skip-link:focus {
		top: 0;
	}
</style>
