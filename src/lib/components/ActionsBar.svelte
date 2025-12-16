<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    
    export let search = '';
    export let size = 24;
    export let weight = 1;
    export let totalIcons = 0;
    
    let isSmallScreen = false;
    let maxSize = 92;
    let searchFocused = false;
    
    // Local values for immediate slider feedback
    let localSize = size;
    let localWeight = weight;
    
    // Sync local values when props change externally
    $: if (size !== localSize) {
        localSize = size;
    }
    $: if (weight !== localWeight) {
        localWeight = weight;
    }
    
    function updateSize(newSize) {
        localSize = newSize;
        size = newSize; // Update prop for other components
        
        // Directly update CSS variable - NO Svelte re-render
        if (browser) {
            const grid = document.querySelector('[role="list"]');
            if (grid) {
                grid.style.setProperty('--icon-size', `${newSize}px`);
            }
        }
    }
    
    function updateWeight(newWeight) {
        localWeight = newWeight;
        weight = newWeight; // Update prop for other components
        
        // Directly update CSS variable - NO Svelte re-render
        if (browser) {
            const grid = document.querySelector('[role="list"]');
            if (grid) {
                grid.style.setProperty('--stroke-width', `${newWeight}px`);
            }
        }
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
    
    onMount(() => {
        checkScreenSize();
        if (browser) {
            window.addEventListener('resize', checkScreenSize);
        }
    });
    
    onDestroy(() => {
        if (browser) {
            window.removeEventListener('resize', checkScreenSize);
        }
    });
</script>

<style>
    .actions-bar-container {
        position: sticky;
        top: 0;
        z-index: 40;
        /* background: black; */
        transition: all 0.3s ease;
        margin: auto;
        max-width: 100%;
        width: 660px;
    }

    .actions-bar {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 0.25rem 0.25rem;
        max-width: 1200px;
        margin: 30px auto 0px;
    }

    .search-wrapper {
        position: relative;
        flex: 0 0 200px;
    }

    .search-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        pointer-events: none;
    }

    .search-input {
        width: 100%;
        background-color: transparent;
        border: none;
        color: white;
        padding: 0.5rem 0.5rem 0.5rem 2.5rem;
        outline: none;
        font-size: 14px;
        transition: width 0.3s ease, background-color 0.3s ease;
        will-change: width, background-color;
    }
     
    .search-input:focus {
        width: calc(660px - 0.5rem);
        background-color: #0700CC;
        transition-delay: 0.1s;
        /* Background color change is sufficient for accessibility */
    }

    .search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .slider-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        transition: opacity 0.3s ease;
        transition-delay: 0.1s;
    }

    .search-input-focused .slider-group {
        opacity: 0;
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
        font-size: 14px;
        min-width: 50px;
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
                    background-color 0.15s ease,
                    width 0.15s ease,
                    height 0.15s ease;
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
                    background-color 0.15s ease,
                    width 0.15s ease,
                    height 0.15s ease;
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

        .search-wrapper {
            flex: 1 1 100%;
            width: 100%;
        }
        
        .search-input {
            font-size: 16px; /* Prevent zoom on mobile when focusing */
        }
        
        .search-input:focus {
            width: 100%;
            background-color: #0700CC;
            transition-delay: 0.1s;
        }

        .slider-group {
            width: 100%;
        }

        .slider {
            max-width: none;
        }
        .search-input-focused .slider-group {
            opacity: 1;
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
    <div class="actions-bar overflow-hidden {searchFocused? 'search-input-focused' : ''}">
        <!-- Search -->
        <div class="search-wrapper">
            <label for="icon-search" class="sr-only">Search icons</label>
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
                id="icon-search"
                type="text"
                placeholder="Search {totalIcons} icons..."
                bind:value={search}
                onfocus={() => searchFocused = true}
                onblur={() => searchFocused = false}
                class="search-input focus:outline-none focus:ring-0 focus:bg-indigo-600"
                aria-label="Search icons"
            />
        </div>

        <!-- Size Slider -->
        <div class="slider-group">
            <label for="size" class="slider-label text-right">Size</label>
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
            <label for="weight" class="slider-label text-right">Weight</label>
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
