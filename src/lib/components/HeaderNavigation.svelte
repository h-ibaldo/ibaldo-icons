<script>
    import { onMount } from 'svelte';

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
        gap: 6px;
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
        transition-delay: 0.3s, 0.3s;
    }
    .nav-links.hide a:nth-child(2) {
        transition-delay: 0.2s, 0.2s;
    }
    .nav-links.hide a:nth-child(3) {
        transition-delay: 0.1s, 0.1s;
    }
    .nav-links.hide a:nth-child(4) {
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

<header class="flex justify-between items-center px-4 py-3 z-10">
    <h1 class="text-sm font-medium">
        <a href="/" class="text-inherit no-underline hover:opacity-80">icon.design</a>
    </h1>

    <div class="flex items-center overflow-hidden">

        <nav class="space-x-4 text-sm desktop-only nav-links {isScrolled ? 'hide' : ''}" aria-label="Main navigation">
            <a href="/" class="text-indigo-500 hover:text-indigo-600">Icons</a>
            <a href="/about" class="text-indigo-500 hover:text-indigo-600">About</a>
            <a href="/license" class="text-indigo-500 hover:text-indigo-600">License</a>
            <a href="/request-icon" class="text-indigo-500 hover:text-indigo-600">Request icon</a>
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
        <h2 id="drawer-title" class="text-lg font-bold">Menu</h2>
        <button
            bind:this={closeButton}
            on:click={closeDrawer}
            class="text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <nav class="flex flex-col space-y-4 text-base" aria-label="Mobile navigation">
        <a href="/" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>Icons</a>
        <a href="/about" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>About</a>
        <a href="/license" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>License</a>
        <a href="/request-icon" class="text-indigo-500 hover:text-indigo-600" on:click={closeDrawer}>Request icon</a>
    </nav>
</div>
