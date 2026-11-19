<script>
    import Check from '$icons/Check.svelte';
    import ChevronUp from '$icons/ChevronUp.svelte';
    import Funnel from '$icons/Funnel.svelte';
    import Search from '$icons/Search.svelte';
    import AdjustPair from '$icons/AdjustPair.svelte';
    import X from '$icons/X.svelte';
    import { onMount, onDestroy, tick } from 'svelte';
    import { slide, scale, fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import ColorPicker from './ColorPicker.svelte';
    import { theme } from '$lib/theme.js';
    import { cubicOut } from 'svelte/easing';
    import { browser } from '$app/environment';

    export let search = '';
    export let size = 48;
    export let weight = 1;
    export let totalIcons = 0;
    export let categories = [];
    // Several categories can be selected; an icon shows if it is in any of them
    export let selectedCategories = [];
    // { category: number of icons }, shown next to each filter
    export let categoryCounts = {};
    // Icon color: '' = default ink
    export let color = '';
    
    let isSmallScreen = false;
    let maxSize = 92;
    let searchInput;
    let resizeTimeout;
    let shortcutLabel = '';

    // Search: only an icon in the bar; clicking it slides a blue search bar
    // in above the dark bar. Closing it clears the search.
    let searchOpen = false;

    async function openSearch() {
        searchOpen = true;
        await tick();
        if (searchInput) searchInput.focus();
    }

    // Closing keeps the query; it stays visible as a pill under the bar
    function closeSearch() {
        searchOpen = false;
    }

    function clearSearch() {
        search = '';
    }

    function toggleSearch() {
        if (searchOpen) closeSearch();
        else openSearch();
    }

    // Filters: the funnel opens a panel under the bar, as wide as the bar,
    // with every category in columns (no scrolling). Multiple selection.
    let filtersOpen = false;
    let containerEl;

    // Mobile only: size and stroke sliders move into their own panel
    let adjustOpen = false;

    // One panel open at a time
    function toggleFilters() {
        filtersOpen = !filtersOpen;
        if (filtersOpen) colorOpen = adjustOpen = false;
    }

    function toggleColor() {
        colorOpen = !colorOpen;
        if (colorOpen) filtersOpen = adjustOpen = false;
    }

    function toggleAdjust() {
        adjustOpen = !adjustOpen;
        if (adjustOpen) filtersOpen = colorOpen = false;
    }

    function toggleCategory(cat) {
        selectedCategories = selectedCategories.includes(cat)
            ? selectedCategories.filter((c) => c !== cat)
            : [...selectedCategories, cat];
    }

    function removeCategory(cat) {
        selectedCategories = selectedCategories.filter((c) => c !== cat);
    }

    function clearCategories() {
        selectedCategories = [];
    }

    // The blue search bar rolls over the dark bar from left to right, like a
    // carpet laid on top of it (and rolls back when closing)
    function roll(node, { duration = 320 } = {}) {
        return {
            duration,
            easing: cubicOut,
            css: (t) => `clip-path: inset(0 ${(1 - t) * 100}% 0 0)`
        };
    }

    // Pills grow in from 70% and fade; neighbours slide over (flip)
    const pillAnim = { duration: 180, start: 0.7, easing: cubicOut };

    // Color picker: presets plus the native picker for any color
    const COLOR_PRESETS = [
        { name: 'Default', value: '' },
        { name: 'Slate', value: '#64748b' },
        { name: 'Blue', value: '#0900FF' },
        { name: 'Indigo', value: '#4f46e5' },
        { name: 'Teal', value: '#0d9488' },
        { name: 'Green', value: '#16a34a' },
        { name: 'Amber', value: '#d97706' },
        { name: 'Red', value: '#dc2626' },
        { name: 'Pink', value: '#db2777' }
    ];
    let colorOpen = false;
    let colorEl;

    // The bar keeps its square bottom corners until a closing panel has
    // finished sliding up; only then do the corners round (CSS transition).
    // Rounding them right away left a notch while the panel was collapsing.
    let panelShown = false;
    $: if (filtersOpen || colorOpen || adjustOpen) panelShown = true;
    function onPanelClosed() {
        if (!(filtersOpen || colorOpen || adjustOpen)) panelShown = false;
    }

    // What the default ('' = currentColor) looks like on the page
    $: DEFAULT_INK = $theme === 'dark' ? '#F8FAFC' : '#000000';

    const label = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);

    function handleOutsideClick(e) {
        if (filtersOpen && containerEl && !containerEl.contains(e.target)) filtersOpen = false;
        if (colorOpen && containerEl && !containerEl.contains(e.target)) colorOpen = false;
        if (adjustOpen && containerEl && !containerEl.contains(e.target)) adjustOpen = false;
    }

    // Local values for immediate slider feedback
    let localSize = size;
    let localWeight = weight;

    // Cache DOM reference and RAF IDs for performance
    let gridElement = null;
    let sizeRaf = null;
    let weightRaf = null;

    // Sync local values when props change externally
    $: if (size !== localSize) {
        localSize = size;
    }
    $: if (weight !== localWeight) {
        localWeight = weight;
    }

    function updateSize(newSize) {
        localSize = newSize; // Instant visual feedback

        // Cancel any pending animation frame
        if (sizeRaf) cancelAnimationFrame(sizeRaf);

        // Schedule update for next paint cycle
        sizeRaf = requestAnimationFrame(() => {
            size = newSize; // Update prop for other components

            // Directly update CSS variable using cached reference
            if (gridElement) {
                gridElement.style.setProperty('--icon-size', `${newSize}px`);
            }
        });
    }

    function updateWeight(newWeight) {
        localWeight = newWeight; // Instant visual feedback

        // Cancel any pending animation frame
        if (weightRaf) cancelAnimationFrame(weightRaf);

        // Schedule update for next paint cycle
        weightRaf = requestAnimationFrame(() => {
            weight = newWeight; // Update prop for other components

            // Directly update CSS variable using cached reference
            if (gridElement) {
                gridElement.style.setProperty('--stroke-width', `${newWeight}px`);
            }
        });
    }
    
    function checkScreenSize() {
        if (!browser) return;
        
        isSmallScreen = window.innerWidth <= 639;
        maxSize = isSmallScreen ? 44 : 92;
        
        // Clamp size if it exceeds maxSize
        if (size > maxSize) {
            size = maxSize;
        }
    }
    
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            checkScreenSize();
        }, 150);
    }
    
    function handleKeyDown(e) {
        // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape' && filtersOpen) filtersOpen = false;
        if (e.key === 'Escape' && colorOpen) colorOpen = false;
        if (e.key === 'Escape' && adjustOpen) adjustOpen = false;
    }
    
    function getShortcutLabel() {
        if (!browser) return '';
        const isMac = /MAC/i.test(navigator.platform) || /MAC/i.test(navigator.userAgent);
        return isMac ? '⌘K' : 'Ctrl+K';
    }

    onMount(() => {
        checkScreenSize();
        if (browser) {
            // Cache grid element reference for performance
            gridElement = document.querySelector('[role="list"]');

            shortcutLabel = getShortcutLabel();
            window.addEventListener('resize', handleResize);
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('mousedown', handleOutsideClick, { passive: true });
        }
    });
    
    onDestroy(() => {
        if (browser) {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleOutsideClick);
        }
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        // Cancel any pending animation frames
        if (sizeRaf) cancelAnimationFrame(sizeRaf);
        if (weightRaf) cancelAnimationFrame(weightRaf);
    });
</script>

<style>
    /* Sticky wrapper: blue search bar (optional), dark bar, filter panel */
    .actions-bar-container {
        position: sticky;
        top: 0;
        z-index: 40;
        margin: 30px auto 0;
        max-width: 100%;
        width: 750px;
        display: flex;
        flex-direction: column;
    }

    .actions-bar {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem var(--bar-pad, 0.25rem);
        min-height: 3rem;
    }

    .bar-buttons {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .bar-button {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        opacity: 0.75;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: opacity 0.15s ease, background-color 0.15s ease;
    }
    .bar-button:hover, .bar-button.active { opacity: 1; }
    /* Active = full opacity only; a background box showed the bar's padding
       on three sides next to the blue search bar */
    .bar-button:focus-visible { outline: 2px solid white; outline-offset: -2px; opacity: 1; }
    .bar-button svg :global(*) { stroke-width: 2; }

    /* Number of active filters on the funnel */
    .badge {
        position: absolute;
        top: 4px;
        right: 2px;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        border-radius: 8px;
        background: #0900FF;
        color: white;
        font-size: 10px;
        line-height: 16px;
        font-variant-numeric: tabular-nums;
    }

    /* The dark bar and the blue search bar laid over it */
    .bar-stack { position: relative; }

    /* Blue search bar: covers the dark bar completely, all one blue */
    /* Starts at the search button and covers the bar to the right; the
       funnel (first button) stays visible and usable */
    .search-bar {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: calc(var(--bar-pad, 0.25rem) + 2.5rem);
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #0900FF;
        padding: 0 0.25rem 0 0;
        gap: 0;
    }
    .search-bar .search-bar-icon { flex: 0 0 auto; opacity: 1; }
    .search-input {
        flex: 1;
        min-width: 0;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        padding: 0 0.75rem 0 0.25rem;
    }
    .search-input::placeholder { color: rgba(255, 255, 255, 0.6); }
    /* No focus ring or border: the input is part of the blue bar */
    .search-input,
    .search-input:focus,
    .search-input:focus-visible {
        border: 0;
        border-radius: 0;
        outline: none;
        box-shadow: none;
        -webkit-appearance: none;
        appearance: none;
    }
    .search-bar .bar-button { opacity: 0.85; }
    .shortcut {
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        white-space: nowrap;
    }

    /* Filter panel: as wide as the bar, categories in columns */
    .filter-panel {
        background: rgb(30 41 59); /* one step lighter than the bar */
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        overflow: hidden;
    }
    .filter-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 2px;
        padding: 0.75rem;
    }
    .filter-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4rem 0.5rem;
        color: rgba(255, 255, 255, 0.75);
        font-size: 13px;
        text-align: left;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: background-color 0.1s ease, color 0.1s ease;
    }
    .filter-option:hover { background: rgba(255, 255, 255, 0.07); color: white; }
    .filter-option.selected { color: white; }
    .filter-option:focus-visible { outline: 2px solid white; outline-offset: -2px; }
    .check {
        flex: 0 0 auto;
        width: 14px;
        height: 14px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filter-option.selected .check { background: #0900FF; border-color: #0900FF; }
    .count {
        margin-left: auto;
        color: rgba(255, 255, 255, 0.35);
        font-size: 11px;
        font-variant-numeric: tabular-nums;
    }
    /* Chevron centered; "Clear filters" sits at the right edge */
    .filter-footer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 0.25rem 0.25rem;
    }
    .filter-footer .text-button {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(calc(-50% - 0.125rem));
    }
    .collapse-button { width: 2rem; height: 2rem; }
    .text-button {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
    }
    .text-button:hover { color: white; }

    /* Active filters, below the bar and above the icons */
    /* Active filters: part of the sticky block, so they scroll with the bar.
       No background: the icons pass behind the pills. */
    .pills {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        padding: 10px 0;
    }
    .pills.empty { padding-top: 0; padding-bottom: 0; }
    .pill {
        display: inline-flex;
        height: 24px; /* same height as "Clear all", so the row never shifts */
        transform-origin: left center;
        align-items: center;
        gap: 0.35rem;
        padding: 0.25rem 0.35rem 0.25rem 0.6rem;
        background: rgb(51 65 85); /* slate-700 */
        color: white;
        font-size: 12px;
        line-height: 1.2;
    }
    .pill button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        background: none;
        border: none;
        color: rgb(203 213 225); /* slate-300 */
        cursor: pointer;
        padding: 0;
    }
    .pill button:hover { color: white; }
    .pill-search { background: #0900FF; }
    .pill .pill-label { width: auto; height: auto; color: white; font-size: 12px; }
    .pills .text-button {
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 0 0.5rem;
        line-height: 1;
        color: rgb(71 85 105);
    }
    .pills .text-button:hover { color: rgb(15 23 42); }
    :global(html.dark) .pills .text-button { color: rgb(148 163 184); }
    :global(html.dark) .pills .text-button:hover { color: white; }

    .slider-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }

    /* Size/stroke panel: mobile only */
    .adjust-button, .adjust-panel { display: none; }
    .adjust-panel { padding: 1rem 1rem 0; }
    .adjust-row {
        display: grid;
        grid-template-columns: 56px minmax(0, 1fr) 48px;
        align-items: center;
        gap: 0.75rem;
        min-height: 44px;
        color: white;
        font-size: 13px;
    }
    .adjust-label { color: rgba(255, 255, 255, 0.7); }
    .adjust-value { text-align: right; font-variant-numeric: tabular-nums; }

    
    .slider-label {
        color: white;
        font-size: 14px;
        min-width: 45px;
    }

    .slider {
        flex: 1;
        max-width: 300px;
    }

    .slider-value {
        color: white;
        font-size: 12px;
        min-width: 34px;
        font-variant-numeric: tabular-nums; /* Prevent layout shift on number changes */
    }

    .range-input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 1px;
        background: white;
        outline: none;
        cursor: pointer;
        /* Optimistic UI: instant visual feedback */
        transition: opacity 0.1s ease;
    }

    .range-input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 12px;
        height: 12px;
        background: #0900FF;
        border: 1px solid white;
        cursor: pointer;
        border-radius: var(--r-xs);
        /* Optimistic UI: smooth thumb movement */
        transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1),
                    background-color 0.15s ease;
        will-change: transform;
    }

    .range-input::-moz-range-thumb {
        width: 12px;
        height: 12px;
        background: #0900FF;
        border: none;
        cursor: pointer;
        border-radius: var(--r-xs);
        /* Optimistic UI: smooth thumb movement */
        transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1),
                    background-color 0.15s ease;
        will-change: transform;
    }

    /* Active state: visual feedback when dragging */
    .range-input:active::-webkit-slider-thumb {
        background: white;
        transform: scale(1.15);
    }
    
    .range-input:active::-moz-range-thumb {
        background: white;
        transform: scale(1.15);
    }
    
    /* Enhanced focus state: larger thumb with white ring for better visibility */
    .range-input:focus-visible::-webkit-slider-thumb {
        width: 16px;
        height: 16px;
        background: #0900FF;
        border: 2px solid white;
        box-shadow: 0 0 0 2px #0900FF;
    }
    
    .range-input:focus-visible::-moz-range-thumb {
        width: 16px;
        height: 16px;
        background: #0900FF;
        border: 2px solid white;
        box-shadow: 0 0 0 2px #0900FF;
    }
    
    /* Icon color */
    .color-wrapper { position: relative; flex: 0 0 auto; }
    /* Flat color with a constant light border */
    .swatch {
        display: block;
        width: 23px;
        height: 23px;
        border: 1px solid #cbd5e1;
    }
    .color-panel { padding: 0.75rem 0.75rem 0; }
    .color-panel .filter-footer { padding: 0.25rem 0 0.25rem; }

    /* ---- Rounded corners (scale in app.css) ---- */
    .actions-bar { border-radius: var(--r-lg); transition: border-radius 0.15s ease; }
    /* The blue bar covers the bar from the search button to the right edge */
    .search-bar { border-radius: 0 var(--r-lg) var(--r-lg) 0; transition: border-radius 0.15s ease; }
    /* A panel open under the bar: they read as one block */
    .actions-bar-container.panel-open .actions-bar { border-radius: var(--r-lg) var(--r-lg) 0 0; }
    .actions-bar-container.panel-open .search-bar { border-radius: 0 var(--r-lg) 0 0; }
    .filter-panel { border-radius: 0 0 var(--r-lg) var(--r-lg); }
    .bar-button { border-radius: var(--r-sm); }
    .filter-option { border-radius: var(--r-sm); }
    .check { border-radius: var(--r-xs); }
    .pill { border-radius: var(--r-full); padding-left: 0.7rem; padding-right: 0.45rem; }
    .pills .text-button { border-radius: var(--r-full); }
    .swatch { border-radius: var(--r-sm); }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    /* Narrower bar where 750px would cover the site name and the menu button
       once the bar sticks to the top */
    @media (max-width: 1140px) {
        .actions-bar-container { width: 550px; }
        .filter-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }

    @media (max-width: 768px) {
        .actions-bar-container {
            position: fixed;
            bottom: 0;
            top: auto;
            left: 0;
            right: 0;
            margin: 0;
            width: auto;
            max-width: 100vw;
        }
        /* The bar sits at the bottom, so the filter panel opens above it */
        .filter-panel { order: -1; border-top: none; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .collapse-button svg { transform: rotate(180deg); }
        .color-popover { top: auto; bottom: calc(100% + 0.25rem); } /* panel is above the bar: collapse downward */
        .pills { order: -2; }
        .filter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .actions-bar-container { --bar-pad: 0.5rem; }
        /* Edge-to-edge at the bottom of the screen: square, panels round on top */
        .actions-bar, .search-bar,
        .actions-bar-container.panel-open .actions-bar,
        .actions-bar-container.panel-open .search-bar { border-radius: 0; }
        .filter-panel { border-radius: var(--r-lg) var(--r-lg) 0 0; }
        .actions-bar {
            gap: 0.75rem;
            padding: 0.5rem var(--bar-pad) 1.5rem;
        }
        /* Same vertical padding as the bar, so the magnifier lines up with
           the funnel instead of centering in the taller mobile bar */
        .search-bar { padding-top: 0.5rem; padding-bottom: 1.5rem; }
        .search-input { height: 2.5rem; }
        .search-input { font-size: 16px; } /* no zoom on focus */
        .shortcut { display: none; }
        .pills { padding: 8px 1rem; }

        /* Sliders move into the panel; the bar keeps only buttons */
        .slider-group { display: none; }
        .adjust-button { display: flex; margin-left: auto; }
        .adjust-panel { display: block; }

        .slider {
            max-width: none;
        }
        /* Range input thumb size for smaller screens */
        .range-input::-webkit-slider-thumb {
            width: 42px;
            height: 24px;
        }

        .range-input::-moz-range-thumb {
            width: 42px;
            height: 24px;
        }

        .range-input:focus-visible::-webkit-slider-thumb {
            width: 42px;
            height: 24px;
        }

        .range-input:focus-visible::-moz-range-thumb {
            width: 42px;
            height: 24px;
        }
    }
</style>

<div class="actions-bar-container {panelShown ? 'panel-open' : ''}" bind:this={containerEl}>
    <div class="bar-stack">
    {#if searchOpen}
        <div class="search-bar" transition:roll>
            <!-- Same size and place as the search button underneath, so the
                 magnifier stays exactly where it was -->
            <button type="button" class="bar-button search-bar-icon" onclick={closeSearch} aria-label="Close search" tabindex="-1">
                <Search size={18} aria-hidden="true" />
            </button>
            <label for="icon-search" class="sr-only">Search icons</label>
            <input
                id="icon-search"
                bind:this={searchInput}
                type="text"
                placeholder={totalIcons > 0 ? `Search ${totalIcons.toLocaleString('en-US')} icons...` : 'Search icons...'}
                bind:value={search}
                onkeydown={(e) => { if (e.key === 'Escape') closeSearch(); }}
                class="search-input"
                autocomplete="off"
                spellcheck="false"
            />
            {#if shortcutLabel}<span class="shortcut" aria-hidden="true">{shortcutLabel}</span>{/if}
            <button type="button" class="bar-button" onclick={closeSearch} aria-label="Close search">
                <X size={14} aria-hidden="true" />
            </button>
        </div>
    {/if}

    <div class="actions-bar bg-slate-900">
        <div class="bar-buttons">
            {#if categories.length > 0}
                <button
                    type="button"
                    class="bar-button {filtersOpen || selectedCategories.length ? 'active' : ''}"
                    onclick={toggleFilters}
                    aria-label="Filter by category"
                    aria-expanded={filtersOpen}
                    aria-controls="filter-panel"
                >
                    <Funnel size={18} aria-hidden="true" />
                    {#if selectedCategories.length}<span class="badge">{selectedCategories.length}</span>{/if}
                </button>
            {/if}
            <button
                type="button"
                class="bar-button {searchOpen || search ? 'active' : ''}"
                onclick={toggleSearch}
                aria-label="Search icons"
                aria-expanded={searchOpen}
                aria-controls="icon-search"
            >
                <Search size={18} aria-hidden="true" />
            </button>
        </div>

        <!-- Mobile: opens the size/stroke panel (the sliders below are hidden) -->
        <button
            type="button"
            class="bar-button adjust-button {adjustOpen ? 'active' : ''}"
            onclick={toggleAdjust}
            aria-label="Size and stroke"
            aria-expanded={adjustOpen}
            aria-controls="adjust-panel"
        >
            <AdjustPair size={18} aria-hidden="true" />
        </button>

        <!-- Size Slider -->
        <div class="slider-group">
            <label for="size" class="slider-label text-right hidden">Size</label>
            <div class="slider flex align-center">
                <input
                    id="size"
                    type="range"
                    min="12"
                    max={maxSize}
                    step="4"
                    value={localSize}
                    oninput={(e) => updateSize(Number(e.target.value))}
                    class="range-input"
                    aria-label="Icon size"
                    aria-valuemin="12"
                    aria-valuemax={maxSize}
                    aria-valuenow={localSize}
                />
            </div>
            <span class="slider-value text-left" aria-hidden="true">{localSize}px</span>
        </div>

        <!-- Weight Slider -->
        <div class="slider-group">
            <label for="weight" class="slider-label text-right hidden">Weight</label>
            <div class="slider flex align-center">
                <input
                    id="weight"
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.5"
                    value={localWeight}
                    oninput={(e) => updateWeight(Number(e.target.value))}
                    class="range-input"
                    aria-label="Icon stroke weight"
                    aria-valuemin="0.5"
                    aria-valuemax="2.5"
                    aria-valuenow={localWeight}
                />
            </div>
            <span class="slider-value" aria-hidden="true">{localWeight}pt</span>
        </div>

        <!-- Icon color -->
        <div class="color-wrapper" bind:this={colorEl}>
            <button
                type="button"
                class="bar-button {colorOpen || color ? 'active' : ''}"
                onclick={toggleColor}
                aria-label="Icon color"
                aria-expanded={colorOpen}
                aria-controls="color-panel"
            >
                <span class="swatch" style="background: {color || DEFAULT_INK}"></span>
            </button>
        </div>
    </div>

    </div>

    {#if filtersOpen}
        <div id="filter-panel" class="filter-panel" role="group" aria-label="Categories" transition:slide={{ duration: 200, easing: cubicOut }} onoutroend={onPanelClosed}>
            <div class="filter-grid">
                {#each categories as cat}
                    {@const selected = selectedCategories.includes(cat)}
                    <button
                        type="button"
                        class="filter-option {selected ? 'selected' : ''}"
                        role="checkbox"
                        aria-checked={selected}
                        onclick={() => toggleCategory(cat)}
                    >
                        <span class="check" aria-hidden="true">
                            {#if selected}
                                <Check size={10} strokeWidth={3.5} aria-hidden="true" />
                            {/if}
                        </span>
                        {label(cat)}
                        {#if categoryCounts[cat]}<span class="count">{categoryCounts[cat].toLocaleString('en-US')}</span>{/if}
                    </button>
                {/each}
            </div>
            <div class="filter-footer">
                {#if selectedCategories.length}
                    <button type="button" class="text-button" onclick={clearCategories}>Clear filters</button>
                {/if}
                <button type="button" class="bar-button collapse-button" onclick={() => (filtersOpen = false)} aria-label="Close filters">
                    <ChevronUp size={16} aria-hidden="true" />
                </button>
            </div>
        </div>
    {/if}

    {#if adjustOpen}
        <div id="adjust-panel" class="filter-panel adjust-panel" role="group" aria-label="Size and stroke" transition:slide={{ duration: 200, easing: cubicOut }} onoutroend={onPanelClosed}>
            <label class="adjust-row">
                <span class="adjust-label">Size</span>
                <input
                    type="range"
                    min="12"
                    max={maxSize}
                    step="4"
                    value={localSize}
                    oninput={(e) => updateSize(Number(e.target.value))}
                    class="range-input"
                    aria-label="Icon size"
                />
                <span class="adjust-value">{localSize}px</span>
            </label>
            <label class="adjust-row">
                <span class="adjust-label">Stroke</span>
                <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.5"
                    value={localWeight}
                    oninput={(e) => updateWeight(Number(e.target.value))}
                    class="range-input"
                    aria-label="Icon stroke weight"
                />
                <span class="adjust-value">{localWeight}pt</span>
            </label>
            <div class="filter-footer">
                <button type="button" class="bar-button collapse-button" onclick={() => (adjustOpen = false)} aria-label="Close size and stroke">
                    <ChevronUp size={16} aria-hidden="true" />
                </button>
            </div>
        </div>
    {/if}

    {#if colorOpen}
        <div id="color-panel" class="filter-panel color-panel" role="dialog" aria-label="Icon color" transition:slide={{ duration: 200, easing: cubicOut }} onoutroend={onPanelClosed}>
            <ColorPicker bind:value={color} presets={COLOR_PRESETS} defaultColor={DEFAULT_INK} wide />
            <div class="filter-footer">
                <button type="button" class="bar-button collapse-button" onclick={() => (colorOpen = false)} aria-label="Close color panel">
                    <ChevronUp size={16} aria-hidden="true" />
                </button>
            </div>
        </div>
    {/if}

    <!-- Always rendered so pills can animate out, including the last one -->
    <div class="pills {selectedCategories.length || (search && !searchOpen) ? '' : 'empty'}" aria-label="Active filters">
            {#if search && !searchOpen}
                <span class="pill pill-search" transition:scale={pillAnim}>
                    <button type="button" class="pill-label" onclick={openSearch} aria-label="Edit search">“{search}”</button>
                    <button type="button" onclick={clearSearch} aria-label="Clear search">
                        <X size={9} strokeWidth={3} aria-hidden="true" />
                    </button>
                </span>
            {/if}
            {#each selectedCategories as cat (cat)}
                <span class="pill" transition:scale={pillAnim} animate:flip={{ duration: 200 }}>
                    {label(cat)}
                    <button type="button" onclick={() => removeCategory(cat)} aria-label="Remove filter {label(cat)}">
                        <X size={9} strokeWidth={3} aria-hidden="true" />
                    </button>
                </span>
            {/each}
            {#if selectedCategories.length > 1}
                <button type="button" class="text-button" onclick={clearCategories} transition:fade={{ duration: 150 }}>Clear all</button>
            {/if}
        </div>
</div>
