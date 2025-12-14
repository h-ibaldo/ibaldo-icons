<script>
    export let search = '';
    export let size = 24;
    export let weight = 1;
    export let totalIcons = 0;
</script>

<style>
    .actions-bar-container {
        position: sticky;
        top: 0;
        z-index: 40;
        /* background: black; */
        transition: all 0.3s ease;
        margin: auto;
        width: 100%;
        max-width: 660px;
    }

    .actions-bar {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 0.5rem 0.5rem;
        max-width: 1200px;
        margin: 20px auto 50px;
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
        background: transparent;
        border: none;
        color: white;
        padding: 0.5rem 0.5rem 0.5rem 2.5rem;
        outline: none;
        font-size: 14px;
    }

    .search-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .slider-group {
        display: flex;
        align-items: center;
        gap: 1rem;
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
        font-size: 14px;
        min-width: 50px;
        text-align: right;
    }

    .range-input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 2px;
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
        border: none;
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
        .actions-bar {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
        }

        .search-wrapper {
            flex: 1 1 100%;
            width: 100%;
        }

        .slider-group {
            width: 100%;
        }

        .slider {
            max-width: none;
        }
    }
</style>

<div class="actions-bar-container bg-slate-900">
    <div class="actions-bar">
        <!-- Search -->
        <div class="search-wrapper">
            <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
                type="text"
                placeholder="Search icon"
                bind:value={search}
                class="search-input"
            />
        </div>

        <!-- Size Slider -->
        <div class="slider-group">
            <label for="size" class="slider-label">Size</label>
            <div class="slider">
                <input
                    id="size"
                    type="range"
                    min="12"
                    max="100"
                    step="4"
                    bind:value={size}
                    class="range-input"
                />
            </div>
            <span class="slider-value">{size}px</span>
        </div>

        <!-- Weight Slider -->
        <div class="slider-group">
            <label for="weight" class="slider-label">Weight</label>
            <div class="slider">
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
