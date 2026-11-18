<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';

    export let search = '';
    export let size = 48;
    export let weight = 1;
    export let totalIcons = 0;
    export let categories = [];
    export let selectedCategory = '';
    
    let isSmallScreen = false;
    let maxSize = 92;
    let searchFocused = false;
    let searchInput;
    let showClearButton = false;
    let animationTimeout;
    let resizeTimeout;
    let placeholderText = 'Search icons...';

    // Category dropdown state
    let dropdownOpen = false;
    let categorySearch = '';
    let categoryInput;
    let dropdownEl;

    $: categoryLabel = selectedCategory
        ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
        : 'All';

    $: filteredCategories = categories.filter(c =>
        !categorySearch || c.toLowerCase().includes(categorySearch.toLowerCase())
    );

    function openDropdown() {
        dropdownOpen = true;
        categorySearch = '';
        // Focus the input after DOM update
        setTimeout(() => { if (categoryInput) categoryInput.focus(); }, 0);
    }

    function closeDropdown() {
        dropdownOpen = false;
        categorySearch = '';
    }

    function selectCategory(cat) {
        selectedCategory = cat;
        closeDropdown();
    }

    function handleDropdownKeydown(e) {
        if (e.key === 'Escape') closeDropdown();
    }

    function handleOutsideClick(e) {
        if (dropdownEl && !dropdownEl.contains(e.target)) closeDropdown();
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
            windowWidth = window.innerWidth;
            checkScreenSize();
            placeholderText = getPlaceholderText();
        }, 150);
    }
    
    function clearSearch() {
        search = '';
        // Keep focus on input after clearing
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    function handleFocus() {
        searchFocused = true;
        // Clear any existing timeout
        if (animationTimeout) {
            clearTimeout(animationTimeout);
        }
        // Show clear button after animation completes (0.1s delay + 0.3s duration = 400ms)
        animationTimeout = setTimeout(() => {
            showClearButton = true;
        }, 400);
    }
    
    function handleBlur() {
        searchFocused = false;
        showClearButton = false;
        // Clear any pending timeout
        if (animationTimeout) {
            clearTimeout(animationTimeout);
            animationTimeout = null;
        }
    }
    
    function handleKeyDown(e) {
        // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            if (searchInput) {
                searchInput.focus();
            }
        }
    }
    
    let windowWidth = 0;
    
    function getPlaceholderText() {
        if (!browser) return 'Search icons...';
        const showShortcut = windowWidth > 767;
        const baseText = 'Search icons...';
        // const baseText = totalIcons > 0 ? `Search ${totalIcons} icons...` : 'Search icons...';
        if (!showShortcut) {
            return baseText;
        }
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0 || 
                      navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;
        const shortcut = isMac ? '⌘K' : 'Ctrl+K';
        return `${baseText} ${shortcut}`;
    }
    
    $: if (browser) {
        // Reference totalIcons explicitly for reactivity
        const _ = totalIcons;
        placeholderText = getPlaceholderText();
    }
    
    onMount(() => {
        checkScreenSize();
        if (browser) {
            // Cache grid element reference for performance
            gridElement = document.querySelector('[role="list"]');

            windowWidth = window.innerWidth;
            placeholderText = getPlaceholderText();
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
        if (animationTimeout) {
            clearTimeout(animationTimeout);
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
    .actions-bar-container {
        position: sticky;
        top: 0;
        z-index: 40;
        /* background: black; */
        /* transition: all 0.3s ease; */
        margin: auto;
        max-width: 100%;
        width: 750px;
    }

    .actions-bar {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.25rem;
        max-width: 1200px;
        margin: 30px auto 10px;
        min-height: 3rem;
    }

    .search-category-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 0 0 auto;
    }

    .search-wrapper {
        position: relative;
        flex: 0 0 180px;
    }

    .category-wrapper {
        flex: 0 0 180px;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        pointer-events: none;
    }

    .clear-button {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        color: white;
        opacity: 0.7;
        transition: opacity 0.2s ease;
    }

    .clear-button:hover {
        opacity: 1;
    }

    .clear-button:focus-visible {
        outline: 2px solid white;
        outline-offset: 2px;
        opacity: 1;
    }

    .search-input {
        width: 100%;
        background-color: transparent;
        border: none;
        color: white;
        padding: 0.5rem 0.5rem 0.5rem 2.5rem;
        outline: none;
        font-size: 14px;
        transition: background-color 0.3s ease;
    }

    .search-input:focus {
        background-color: #0700CC;
        padding-right: 2rem;
    }

    .search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

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

    /* Dropdown search placeholder + scrollbar (can't be done with standard Tailwind) */
    .dropdown-search::placeholder { color: rgba(255,255,255,0.35); }
    .dropdown-list { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.2) transparent; }

    @media (max-width: 768px) {
        .actions-bar-container {
            position: fixed;
            bottom: 0;
            top:auto;
            left: 0;
            right: 0;
            z-index: 40;
            max-width: 100vw;
        }
        .actions-bar {
            flex-direction: column;
            gap: 1rem;
            padding: 0.5rem 0.5rem 1.5rem 0.5rem;
            margin: 0;
        }

        .search-category-row {
            width: 100%;
            gap: 0;
        }

        .search-wrapper {
            flex: 0 0 50%;
        }

        .category-wrapper {
            flex: 0 0 50%;
        }
        
        .search-input {
            font-size: 16px; /* Prevent zoom on mobile when focusing */
        }
        
        .search-input:focus {
            width: 100%;
            background-color: #0700CC;
            transition-delay: 0.1s;
            padding-right: 2rem; /* Make room for clear button */
        }

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

<div class="actions-bar-container bg-slate-900">
    <div class="actions-bar">
        <!-- Search + Category row -->
        <div class="search-category-row">

        <!-- Search -->
        <div class="search-wrapper">
            <label for="icon-search" class="sr-only">Search icons</label>
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
                id="icon-search"
                bind:this={searchInput}
                type="text"
                placeholder={placeholderText || (totalIcons > 0 ? `Search ${totalIcons} icons...` : 'Search icons...')}
                bind:value={search}
                onfocus={handleFocus}
                onblur={handleBlur}
                onkeydown={(e) => {
                    if (e.key === 'Escape') {
                        if (searchInput) {
                            searchInput.blur();
                        }
                    }
                }}
                class="search-input focus:outline-none focus:ring-0 focus:bg-indigo-600"
                aria-label="Search icons"
            />
            {#if showClearButton && search}
                <button
                    type="button"
                    class="clear-button"
                    onclick={clearSearch}
                    onmousedown={(e) => e.preventDefault()}
                    aria-label="Clear search"
                    transition:fade={{ duration: 200 }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="1.999999990790457" y1="22.000000000897671" x2="21.999999990790457" y2="2.000000000897671"></line>
                        <line x1="21.999999990799552" y1="22.000000001345143" x2="1.999999991699951" y2="2.000000000448381"></line>
                    </svg>
                </button>
            {/if}
        </div>

        <!-- Category Dropdown -->
        {#if categories.length > 0}
        <div class="category-wrapper relative" bind:this={dropdownEl}>
            <button
                type="button"
                class="flex items-center gap-1.5 bg-transparent border-none text-white text-sm cursor-pointer px-2 py-1.5 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity duration-150"
                onclick={openDropdown}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
                aria-label="Filter by category"
            >
                {categoryLabel}
                <svg class="shrink-0 transition-transform duration-150 {dropdownOpen ? 'rotate-180' : ''}" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {#if dropdownOpen}
            <div class="absolute top-[calc(100%+6px)] left-0 bg-slate-900 border border-white/10 min-w-40 z-[100] overflow-hidden" role="dialog" tabindex="-1" onkeydown={handleDropdownKeydown}>
                <input
                    bind:this={categoryInput}
                    bind:value={categorySearch}
                    type="text"
                    class="dropdown-search w-full bg-transparent border-0 border-b border-white/10 text-white text-[13px] px-3 py-2 outline-none"
                    placeholder="Search..."
                    aria-label="Search categories"
                />
                <div class="dropdown-list max-h-[220px] overflow-y-auto" role="listbox">
                    <button
                        type="button"
                        class="block w-full text-left bg-transparent border-none text-[13px] px-3 py-1.5 cursor-pointer transition-colors duration-100 {selectedCategory === '' ? 'text-white bg-indigo-600/40' : 'text-white/70 hover:bg-white/[0.07] hover:text-white'}"
                        role="option"
                        aria-selected={selectedCategory === ''}
                        onclick={() => selectCategory('')}
                    >All</button>
                    {#each filteredCategories as cat}
                        <button
                            type="button"
                            class="block w-full text-left bg-transparent border-none text-[13px] px-3 py-1.5 cursor-pointer transition-colors duration-100 {selectedCategory === cat ? 'text-white bg-indigo-600/40' : 'text-white/70 hover:bg-white/[0.07] hover:text-white'}"
                            role="option"
                            aria-selected={selectedCategory === cat}
                            onclick={() => selectCategory(cat)}
                        >{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
                    {:else}
                        <span class="block text-white/35 text-[13px] px-3 py-2">No results</span>
                    {/each}
                </div>
            </div>
            {/if}
        </div>
        {/if}

        </div><!-- end search-category-row -->

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
