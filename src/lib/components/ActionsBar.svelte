<script>
    import { onMount, onDestroy, tick } from 'svelte';
    import { fade, slide } from 'svelte/transition';
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

    function toggleFilters() {
        filtersOpen = !filtersOpen;
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

    const label = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);

    function handleOutsideClick(e) {
        if (filtersOpen && containerEl && !containerEl.contains(e.target)) filtersOpen = false;
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
    .bar-button.active { background-color: rgba(255, 255, 255, 0.08); }
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
    .filter-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.25rem;
        padding: 0 0.25rem 0.25rem 0.75rem;
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
       White strip so icons scrolling underneath don't show through. */
    .pills {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem;
        padding: 10px 0;
        background: white;
        /* extend the white strip to the full window width (the bar is 750px) */
        box-shadow: 0 0 0 100vmax white;
        clip-path: inset(0 -100vmax);
    }
    .pill {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.25rem 0.35rem 0.25rem 0.6rem;
        background: rgb(15 23 42);
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
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;
        padding: 0;
    }
    .pill button:hover { color: white; }
    .pill-search { background: #0900FF; }
    .pill .pill-label { width: auto; height: auto; color: white; font-size: 12px; }
    .pills .text-button { color: rgb(71 85 105); }
    .pills .text-button:hover { color: rgb(15 23 42); }

    .slider-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }

    
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
        border-radius: 0;
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
        border-radius: 0;
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

    @media (max-width: 900px) {
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
        .collapse-button svg { transform: rotate(180deg); } /* panel is above the bar: collapse downward */
        .pills { order: -2; }
        .filter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .actions-bar-container { --bar-pad: 0.5rem; }
        .actions-bar {
            gap: 0.75rem;
            padding: 0.5rem var(--bar-pad) 1.5rem;
        }
        .search-input { font-size: 16px; } /* no zoom on focus */
        .shortcut { display: none; }
        .pills { padding: 8px 1rem; }

        .slider-group {
            width: 100%;
        }

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

<div class="actions-bar-container" bind:this={containerEl}>
    <div class="bar-stack">
    {#if searchOpen}
        <div class="search-bar" transition:roll>
            <!-- Same size and place as the search button underneath, so the
                 magnifier stays exactly where it was -->
            <button type="button" class="bar-button search-bar-icon" onclick={closeSearch} aria-label="Close search" tabindex="-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="9"></circle>
                    <line x1="17.364" y1="17.364" x2="22" y2="22"></line>
                </svg>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" aria-hidden="true">
                    <line x1="2" y1="22" x2="22" y2="2"></line>
                    <line x1="22" y1="22" x2="2" y2="2"></line>
                </svg>
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
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M3.926 3h16.072c.817 0 1.29.927.809 1.588L13.962 14v6l-4 2v-8L3.117 4.588C2.636 3.927 3.108 3 3.926 3Z"></path>
                    </svg>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="9"></circle>
                    <line x1="17.364" y1="17.364" x2="22" y2="22"></line>
                </svg>
            </button>
        </div>

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
    </div>

    </div>

    {#if filtersOpen}
        <div id="filter-panel" class="filter-panel" role="group" aria-label="Categories" transition:slide={{ duration: 200, easing: cubicOut }}>
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
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12.5 9.5 18 20 6"></polyline></svg>
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="5 15.5 12 8.5 19 15.5"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    {/if}

    {#if selectedCategories.length || (search && !searchOpen)}
        <div class="pills" aria-label="Active filters" transition:fade={{ duration: 150 }}>
            {#if search && !searchOpen}
                <span class="pill pill-search" transition:fade={{ duration: 150 }}>
                    <button type="button" class="pill-label" onclick={openSearch} aria-label="Edit search">“{search}”</button>
                    <button type="button" onclick={clearSearch} aria-label="Clear search">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true">
                            <line x1="2" y1="22" x2="22" y2="2"></line>
                            <line x1="22" y1="22" x2="2" y2="2"></line>
                        </svg>
                    </button>
                </span>
            {/if}
            {#each selectedCategories as cat (cat)}
                <span class="pill" transition:fade={{ duration: 150 }}>
                    {label(cat)}
                    <button type="button" onclick={() => removeCategory(cat)} aria-label="Remove filter {label(cat)}">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true">
                            <line x1="2" y1="22" x2="22" y2="2"></line>
                            <line x1="22" y1="22" x2="2" y2="2"></line>
                        </svg>
                    </button>
                </span>
            {/each}
            {#if selectedCategories.length > 1}
                <button type="button" class="text-button" onclick={clearCategories}>Clear all</button>
            {/if}
        </div>
    {/if}
</div>
