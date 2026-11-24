<script>
    import MoonRound from '$icons/MoonRound.svelte';
    import Sun from '$icons/Sun.svelte';
    import X from '$icons/X.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { base } from '$app/paths';
    import { theme, toggleTheme } from '$lib/theme.js';
    import { ICON_COUNT } from '$lib/icon-count.js';

    // Current page: black text with a 1px black underline; others stay blue
    const LINK = 'text-indigo-500 hover:text-indigo-600';
    const ACTIVE = 'text-black border-b border-black';
    $: path = $page.url.pathname.slice(base.length) || "/";
    $: linkClass = (href) => (href === '/' ? path === '/' : path.startsWith(href)) ? ACTIVE : LINK;

    const iconCountLabel = `${ICON_COUNT.toLocaleString('en-US')} icons`;

    let isDrawerOpen = false;
    let isMobile = false;
    let isScrolled = false;
    let drawerButton;
    let closeButton;

    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth < 768;
        };

        const handleScroll = () => {
            isScrolled = window.scrollY > 5;
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
        if (isDrawerOpen) {
            // Focus management: move focus to close button when drawer opens
            setTimeout(() => {
                closeButton?.focus();
            }, 100);
        } else {
            // Return focus to menu button when drawer closes
            drawerButton?.focus();
        }
    }

    function closeDrawer() {
        isDrawerOpen = false;
        drawerButton?.focus();
    }
    
    // Handle focus trap in drawer
    function handleDrawerKeydown(e) {
        if (!isDrawerOpen) return;
        
        if (e.key === 'Escape') {
            closeDrawer();
            return;
        }
        
        // Trap focus within drawer
        if (e.key === 'Tab') {
            const drawer = document.querySelector('.drawer');
            if (!drawer) return;
            
            const focusableElements = [
                closeButton,
                ...Array.from(drawer.querySelectorAll('a, button'))
            ].filter(el => el && !el.hasAttribute('disabled') && !el.hasAttribute('aria-hidden'));
            
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        }
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
        width: 18px;
        height: 1.5px;
        background: currentColor;
        transition: width 0.3s ease, opacity 0.3s ease;
        will-change: width, opacity;
        opacity: 1;
    }

    .hamburger.hide span {
        width: 0;
        opacity: 0;
    }

    .hamburger span:nth-child(1) {
        transition-delay: 0.7s, 0.7s;
    }
    .hamburger span:nth-child(2) {
        transition-delay: 0.6s, 0.6s;
    }
    .hamburger span:nth-child(3) {
        transition-delay: 0.5s, 0.5s;
    }

    .hamburger.hide span:nth-child(1) {
        transition-delay: 0.2s, 0.2s;
    }
    .hamburger.hide span:nth-child(2) {
        transition-delay: 0.1s, 0.1s;
    }
    .hamburger.hide span:nth-child(3) {
        transition-delay: 0s, 0s;
    }

    .header-navigation {
        min-height: 3rem;
    }

    .theme-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        margin-right: 0.75rem;
        background: none;
        border: none;
        cursor: pointer;
    }
    /* Collapses with the nav links when the page scrolls: leaves after the
       links and comes back before them */
    .theme-toggle {
        transform: translate3d(0, 0, 0);
        transition: transform 0.4s ease 0.8s, opacity 0.3s ease 0.9s;
    }
    .theme-toggle.hide {
        opacity: 0;
        pointer-events: none;
        transform: translate3d(50px, 0, 0);
        transition-delay: 0.5s, 0.5s;
    }
    .drawer-theme {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
    }
    :global(html.dark) .drawer { background: rgb(15 23 42); color: rgb(226 232 240); }

    .nav-links {
        transition: opacity 0.3s ease, visibility 0.3s ease;
        overflow: visible;
    }

    .nav-links.hidden {
        opacity: 0;
        visibility: hidden;
    }

    .hamburger-scrolled {
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .nav-links a {
        display: inline-block;
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: transform 0.4s ease, opacity 0.3s ease 0.1s;
        will-change: transform, opacity;
    }

    .nav-links.hide a {
        opacity: 0;
        pointer-events: none;
        transform: translate3d(50px, 0, 0);
    }

    .nav-links.hide a:nth-child(1) {
        transition-delay: 0.4s, 0.4s;
    }
    .nav-links.hide a:nth-child(2) {
        transition-delay: 0.3s, 0.3s;
    }
    .nav-links.hide a:nth-child(3) {
        transition-delay: 0.2s, 0.2s;
    }
    .nav-links.hide a:nth-child(4) {
        transition-delay: 0.1s, 0.1s;
    }
    .nav-links.hide a:nth-child(5) {
        transition-delay: 0s, 0s;
    }

    .nav-links a:nth-child(1) {
        transition-delay: 0.7s, 0.7s;
    }
    .nav-links a:nth-child(2) {
        transition-delay: 0.6s, 0.6s;
    }
    .nav-links a:nth-child(3) {
        transition-delay: 0.5s, 0.5s;
    }
    .nav-links a:nth-child(4) {
        transition-delay: 0.4s, 0.4s;
    }
    .nav-links a:nth-child(5) {
        transition-delay: 0.3s, 0.3s;
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

<header class="flex justify-between items-center px-4 py-3 z-10 header-navigation">
    <h1 class="text-[0.8rem] font-semibold">
        <a href="{base}/" class="text-inherit no-underline hover:opacity-80">Ibaldo Icons</a>
    </h1>

    <p
        class="absolute left-1/2 -translate-x-1/2 text-[0.8rem] text-gray-400 pointer-events-none transition-opacity duration-300"
        class:opacity-0={isScrolled}
        aria-hidden={isScrolled}
    >{iconCountLabel}</p>

    <div class="flex items-center overflow-hidden">
        <!-- Light / dark theme -->
        <button
            type="button"
            class="theme-toggle text-indigo-500 hover:text-indigo-600 {isScrolled ? 'hide' : ''}"
            on:click={toggleTheme}
            tabindex={isScrolled ? -1 : 0}
            aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={$theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
            {#if $theme === 'dark'}
                <!-- sun -->
                <Sun size={18} aria-hidden="true" />
            {:else}
                <!-- moon -->
                <MoonRound size={18} aria-hidden="true" />
            {/if}
        </button>

        <nav class="space-x-4 text-[0.8rem] desktop-only nav-links font-normal {isScrolled ? 'hide' : ''}" aria-label="Main navigation">
            <a href="{base}/" class="{linkClass('/')}">Icons</a>
            <a href="{base}/about" class="{linkClass('/about')}">About</a>
            <a href="{base}/packages" class="{linkClass('/packages')}">Packages</a>
            <a href="{base}/request-icon" class="{linkClass('/request-icon')}">Request icon</a>
            <a href="{base}/services" class="{linkClass('/services')}">Services</a>
        </nav>
        
        <button
            bind:this={drawerButton}
            class="hamburger text-indigo-500 hover:text-indigo-600 mobile-only"
            on:click={toggleDrawer}
            aria-label="Toggle menu"
            aria-expanded={isDrawerOpen}
            aria-controls="drawer-menu"
            >
            <span></span>
            <span></span>
            <span></span>
        </button>
        
        <button
            bind:this={drawerButton}
            class="hamburger text-indigo-500 hover:text-indigo-600 hamburger-scrolled {isScrolled ? '' : 'hide'}"
            on:click={toggleDrawer}
            aria-label="Toggle menu"
            aria-expanded={isDrawerOpen}
            aria-controls="drawer-menu"
            >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>

<!-- Drawer overlay -->
<div
    class="drawer-overlay {isDrawerOpen ? 'open' : ''}"
    on:click={closeDrawer}
    role="button"
    tabindex="-1"
    aria-label="Close menu"
    on:keydown={(e) => {
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeDrawer();
        }
    }}
></div>

<!-- Drawer -->
<div 
    class="drawer {isDrawerOpen ? 'open' : ''}" 
    id="drawer-menu"
    role="dialog"
    aria-modal="true"
    aria-labelledby="drawer-title"
    tabindex="-1"
    on:keydown={handleDrawerKeydown}
>
    <div class="flex justify-between items-center mb-8">
        <h2 id="drawer-title" class="text-xs font-">Menu</h2>
        <button
            bind:this={closeButton}
            on:click={closeDrawer}
            class="text-indigo-500 hover:text-indigo-300 transition-colors "
            aria-label="Close menu"
        >

            <X size={24} aria-hidden="true" />
        </button>
    </div>
    <nav class="flex flex-col space-y-4 text-md" aria-label="Mobile navigation">
        <a href="{base}/" class="{linkClass('/')} self-start" on:click={closeDrawer}>Icons</a>
        <a href="{base}/about" class="{linkClass('/about')} self-start" on:click={closeDrawer}>About</a>
        <a href="{base}/packages" class="{linkClass('/packages')} self-start" on:click={closeDrawer}>Packages</a>
        <a href="{base}/license" class="{linkClass('/license')} self-start" on:click={closeDrawer}>License</a>
        <a href="{base}/request-icon" class="{linkClass('/request-icon')} self-start" on:click={closeDrawer}>Request icon</a>
        <a href="{base}/services" class="{linkClass('/services')} self-start" on:click={closeDrawer}>Services</a>
        <!-- Theme control (the header toggle hides while scrolled) -->
        <button type="button" class="drawer-theme text-indigo-500 hover:text-indigo-600 self-start" on:click={toggleTheme}>
            {#if $theme === 'dark'}
                <Sun size={18} aria-hidden="true" /> Light mode
            {:else}
                <MoonRound size={18} aria-hidden="true" /> Dark mode
            {/if}
        </button>
    </nav>
</div>
