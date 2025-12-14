<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    
    export let search = '';
    export let size = 24;
    export let weight = 1;
    export let totalIcons = 0;
    
    let isSmallScreen = false;
    let maxSize = 100;
    let searchFocused = false;
    
    function checkScreenSize() {
        if (!browser) return;
        
        isSmallScreen = window.innerWidth <= 639;
        maxSize = isSmallScreen ? 44 : 100;
        
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
        margin: 30px auto 40px;
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
    }

    .range-input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 1px;
        background: white;
        outline: none;
        cursor: pointer;
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
    }

    .range-input::-moz-range-thumb {
        width: 12px;
        height: 12px;
        background: #0900FF;
        border: none;
        cursor: pointer;
        border-radius: 0;
    }

    .range-input::-webkit-slider-thumb:hover {
        background: #0700CC;
    }

    .range-input::-moz-range-thumb:hover {
        background: #0700CC;
    }

    @media (max-width: 768px) {
        .actions-bar-container {
            position: fixed;
            bottom: 0;
            top:auto;
            left: 0;
            right: 0;
            z-index: 40;
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
    }
</style>

<div class="actions-bar-container bg-slate-900">
    <div class="actions-bar {searchFocused? 'search-input-focused' : ''}">
        <!-- Search -->
        <div class="search-wrapper">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
                type="text"
                placeholder="Search {totalIcons} icons..."
                bind:value={search}
                onfocus={() => searchFocused = true}
                onblur={() => searchFocused = false}
                class="search-input focus:outline-none focus:ring-0 focus:bg-indigo-600"
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
                    bind:value={size}
                    class="range-input"
                />
            </div>
            <span class="slider-value text-left">{size}px</span>
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
                    bind:value={weight}
                    class="range-input"
                />
            </div>
            <span class="slider-value">{weight}pt</span>
        </div>
    </div>
</div>
