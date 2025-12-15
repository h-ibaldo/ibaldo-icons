<script>
	import '../app.css';
	import HeaderNavigation from '$lib/components/HeaderNavigation.svelte';
	let { children } = $props();
</script>

<!-- Skip to main content link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<HeaderNavigation />
{@render children()}

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
