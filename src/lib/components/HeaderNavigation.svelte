<script>
    import { onMount } from 'svelte';

    let isDrawerOpen = false;
    let isMobile = false;
    let isScrolled = false;

    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth < 768;
        };

        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };

        checkMobile();
        handleScroll();
        
        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function toggleDrawer() {
        isDrawerOpen = !isDrawerOpen;
    }

    function closeDrawer() {
        isDrawerOpen = false;
    }
</script>

<style>
    header {
        position: sticky;
        top: 0;
    }
    .drawer {
        position: fixed;
        top: 0;
        right: 0;
        width: 280px;
        height: 100vh;
        background: white;
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 100;
        padding: 2rem;
    }

    .drawer.open {
        transform: translateX(0);
    }

    .drawer-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .drawer-overlay.open {
        opacity: 1;
        pointer-events: auto;
    }

    .hamburger {
        display: flex;
        flex-direction: column;
        gap: 4px;
        cursor: pointer;
        padding: 4px;
    }

    .hamburger span {
        width: 20px;
        height: 2px;
        background: currentColor;
        transition: all 0.3s ease;
    }

    .nav-links {
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .nav-links.hidden {
        opacity: 0;
        visibility: hidden;
    }

    .hamburger-scrolled {
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .hamburger-scrolled.hidden {
        opacity: 0;
        visibility: hidden;
    }

    @media (min-width: 768px) {
        .mobile-only {
            display: none;
        }
        
        .hamburger-scrolled:not(.hidden) {
            display: flex;
        }
    }

    @media (max-width: 767px) {
        .desktop-only {
            display: none;
        }
        
        .hamburger-scrolled {
            display: none;
        }
    }
</style>

<header class="flex justify-between items-center p-4">
    <h1 class="text-sm font-bold">
        <a href="/" class="text-inherit no-underline hover:opacity-80">icon.design</a>
    </h1>

    <nav class="space-x-4 text-sm desktop-only nav-links {isScrolled ? 'hidden' : ''}">
        <a href="/" class="text-indigo-500 hover:text-indigo-600">Icons</a>
        <a href="/about" class="text-indigo-500 hover:text-indigo-600">About</a>
        <a href="/license" class="text-indigo-500 hover:text-indigo-600">License</a>
        <a href="/request-icon" class="text-indigo-500 hover:text-indigo-600">Request icon</a>
    </nav>

    <button
        class="hamburger text-indigo-500 hover:text-indigo-600 mobile-only"
        on:click={toggleDrawer}
        aria-label="Toggle menu"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>

    <button
        class="hamburger text-indigo-500 hover:text-indigo-600 hamburger-scrolled {isScrolled ? '' : 'hidden'}"
        on:click={toggleDrawer}
        aria-label="Toggle menu"
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>

<!-- Drawer overlay -->
<div
    class="drawer-overlay {isDrawerOpen ? 'open' : ''}"
    on:click={closeDrawer}
    role="button"
    tabindex="-1"
    on:keydown={(e) => e.key === 'Escape' && closeDrawer()}
></div>

<!-- Drawer -->
<div class="drawer {isDrawerOpen ? 'open' : ''}">
    <div class="flex justify-between items-center mb-8">
        <h2 class="text-lg font-bold">Menu</h2>
        <button
            on:click={closeDrawer}
            class="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <nav class="flex flex-col space-y-4 text-base">
        <a href="/" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>Icons</a>
        <a href="/about" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>About</a>
        <a href="/license" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>License</a>
        <a href="/request-icon" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>Request icon</a>
    </nav>
</div>
