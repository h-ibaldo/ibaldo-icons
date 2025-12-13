<script>
  import { onMount } from 'svelte';
  
  let iconsByCategory = {};
  let categories = [];
  let loadingCategory = false;
  let loadingCategories = true;
  let size = 24;
  let weight = 1;
  let currentCategory = 'popular';
  let search = '';
  let svgCache = {};
  
  // Memoization cache for processed SVGs: key = `${iconId}-${size}-${weight}`
  let processedSvgCache = new Map();
  
  // Pre-computed SVG hashes stored with icons (computed once on load)
  let svgHashes = new WeakMap();

  // Fast hash function using object reference + simple string hash
  function getIconId(icon) {
    if (!svgHashes.has(icon)) {
      // Use a combination of path and name for unique ID
      const id = `${icon.path || ''}-${icon.name || ''}`;
      svgHashes.set(icon, id);
    }
    return svgHashes.get(icon);
  }

  function processSVGForDisplay(icon, targetSize, strokeWeight) {
    if (!icon || !icon.svg) return '';
    
    // Create cache key using icon ID (pre-computed, no string hashing needed)
    const iconId = getIconId(icon);
    const cacheKey = `${iconId}-${targetSize}-${strokeWeight}`;
    
    // Check cache first - this is very fast
    if (processedSvgCache.has(cacheKey)) {
      return processedSvgCache.get(cacheKey);
    }
    
    const svgString = icon.svg;
    let processed = svgString;
    
    // Update width and height in the opening <svg> tag
    // Be very careful - only match width/height attributes in the opening svg tag
    processed = processed.replace(/(<svg[^>]*\s)width=["']\d+["']/gi, `$1width="${targetSize}"`);
    processed = processed.replace(/(<svg[^>]*\s)height=["']\d+["']/gi, `$1height="${targetSize}"`);
    
    // Handle stroke-width like the original code did
    // Add style attribute to svg tag if it doesn't exist
    if (!processed.match(/<svg[^>]*\sstyle=/i)) {
      processed = processed.replace(/<svg/i, `<svg style="stroke-width: ${strokeWeight}px"`);
    }
    
    // Also handle the stroke-linecap:round replacement like the original
    processed = processed.replace(/stroke-linecap:round/gi, `stroke-width:${strokeWeight};stroke-linecap:round`);
    
    // Cache the result (limit cache size to prevent memory issues)
    if (processedSvgCache.size > 2000) {
      // Clear oldest entries (simple FIFO - remove first 500)
      const keysToDelete = Array.from(processedSvgCache.keys()).slice(0, 500);
      keysToDelete.forEach(key => processedSvgCache.delete(key));
    }
    processedSvgCache.set(cacheKey, processed);
    
    return processed;
  }

  function downloadSVG(svgContent, filename) {
    // Create a blob with the SVG content
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'icon.svg';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  
  function getCategoryFromHash() {
      return window.location.hash.slice(1) || 'popular';
  }

  async function loadCategories() {
    try {
        // Load the index directly from static folder (no API needed)
        const res = await fetch('/icons-index.json?v=3');
        if (!res.ok) throw new Error('Failed to fetch index');
        const index = await res.json();
        categories = index.categories || [];
        console.log('Loaded categories:', categories);
    } catch (error) {
        console.error('Error loading categories:', error);
        categories = [];
    } finally {
        loadingCategories = false;
    }
  }

  async function loadSVG(path) {
    if (svgCache[path]) return svgCache[path];
    
    try {
        const res = await fetch(path);
        if (!res.ok) throw new Error('Failed to fetch SVG');
        const svg = await res.text();
        svgCache[path] = svg;
        return svg;
    } catch (error) {
        console.error(`Error loading SVG ${path}:`, error);
        return '';
    }
  }

  async function loadCategory(category) {
    if (!category) return;
    
    try {
        loadingCategory = true;
        
        // Load the index directly from static folder (no API needed)
        const res = await fetch('/icons-index.json?v=3');
        if (!res.ok) throw new Error('Failed to fetch index');
        const index = await res.json();
        
        const iconList = index.icons?.[category] || [];
        console.log(`Loaded ${iconList.length} icons for category: ${category}`);
        
        // Load SVG content for each icon
        const iconsWithSVG = await Promise.all(
            iconList.map(async (icon) => {
                const svg = await loadSVG(icon.path);
                return { ...icon, svg };
            })
        );
        
        iconsByCategory[category] = iconsWithSVG;
    } catch (error) {
        console.error(`Error loading ${category} icons:`, error);
    } finally {
        loadingCategory = false;
    }
  }

  onMount(async () => {
    await loadCategories();
    currentCategory = getCategoryFromHash();
    await loadCategory(currentCategory);
    
    window.addEventListener('hashchange', async () => {
        const newCategory = getCategoryFromHash();
        if (newCategory !== currentCategory) {
            currentCategory = newCategory;
            if (!iconsByCategory[newCategory]) {
                await loadCategory(newCategory);
            }
        }
    });
  });

  $: currentIcons = iconsByCategory[currentCategory] || [];

  // Filter icons based on search
  $: filteredIcons = currentIcons.filter(icon => 
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  $: totalIcons = Object.values(iconsByCategory)
      .reduce((sum, icons) => sum + (Array.isArray(icons) ? icons.length : 0), 0);
</script>

<style>
  :global(.icon-wrapper svg) {
    width: 100% !important;
    height: 100% !important;
  }
  
  .icon-container {
    position: relative;
    cursor: pointer;
  }
  
  .icon-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 12px;
    white-space: nowrap;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    z-index: 10;
  }
  
  .icon-container:hover .icon-tooltip {
    opacity: 1;
  }
  
  .icon-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
  }

  .range-input {
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
    background: #000;
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

  .range-input::-ms-thumb {
    width: 12px;
    height: 12px;
    background: #0900FF;
    border: none;
    cursor: pointer;
    border-radius: 0;
  }

  .range-input::-moz-range-track {
    height: 2px;
    background: #000;
  }

  .range-input::-ms-track {
    height: 2px;
    background: #000;
    color: transparent;
  }
</style>

<div class="p-4 w-full max-w-full overflow-x-hidden">
  <div class="mb-6 flex items-center space-x-4 hidden">
      <div class="text-sm font-medium text-gray-500">Categories:</div>
      {#if loadingCategories}
          <div>Loading categories...</div>
      {:else}
          <nav class="flex flex-wrap gap-2">
              {#each categories as category}
                  <a
                      href="#{category}"
                      class="px-3 py-1 rounded-full text-sm transition-colors {currentCategory === category ? 'bg-indigo-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}"
                  >
                      {category}
                  </a>
              {/each}
          </nav>
      {/if}
  </div>

  <div class="mb-4">
    <div class="relative mb-4">
      <input
          type="text"
          placeholder="Search {totalIcons} icons..."
          bind:value={search}
          class="border-0 rounded-lg p-2.5 w-full pr-10 bg-gray-200 focus:bg-white focus:ring-0 focus:outline-none transition-colors duration-200 text-indigo-600 placeholder:text-gray-500"
      />
      {#if search}
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          on:click={() => search = ''}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2;}</style></defs>
            <line class="a" x1="8" y1="16" x2="16" y2="8"/>
            <line class="a" x1="16" y1="16" x2="8" y2="8"/>
          </svg>
        </button>
      {/if}
    </div>
    <div class="flex flex-col space-y-4">
        <div class="flex items-center gap-4">
            <label for="size" class="text-sm font-medium min-w-[60px]">Size</label>
            <input
                id="size"
                type="range"
                min="12"
                max="100"
                step="4"
                bind:value={size}
                class="range-input flex-1"
            />
            <span class="text-sm font-medium min-w-[50px] text-right">{size}px</span>
        </div>
        <div class="flex items-center gap-4">
            <label for="weight" class="text-sm font-medium min-w-[60px]">Weight</label>
            <input
                id="weight"
                type="range"
                min="0.5"
                max="2.5"
                step="0.5"
                bind:value={weight}
                class="range-input flex-1"
            />
            <span class="text-sm font-medium min-w-[50px] text-right">{weight}pt</span>
        </div>
    </div>
  </div>

  {#if currentCategory}
      <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4 capitalize hidden">
              {currentCategory} Icons
              {#if loadingCategory}
                  <span class="text-sm text-gray-600 ml-2">Loading...</span>
              {/if}
          </h2>
          {#if currentIcons.length > 0}
              <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-y-10 gap-x-4 justify-items-center">
                  {#each filteredIcons as icon}
                      <div class="flex flex-col items-center">
                          <div 
                              class="icon-container rounded-lg p-1 transition-colors hover:bg-gray-200 active:bg-gray-300" 
                              style={`width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;`}
                              on:click={() => {
                                const processedSVG = processSVGForDisplay(icon, size, weight);
                                downloadSVG(processedSVG, icon.filename || `${icon.name.toLowerCase().replace(/\s+/g, '-')}.svg`);
                              }}
                              role="button"
                              tabindex="0"
                              on:keydown={(e) => {
                                if (e.key === 'Enter') {
                                  const processedSVG = processSVGForDisplay(icon, size, weight);
                                  downloadSVG(processedSVG, icon.filename || `${icon.name.toLowerCase().replace(/\s+/g, '-')}.svg`);
                                }
                              }}
                          >
                              <div style={`width: ${size}px; height: ${size}px;`} class="icon-wrapper">
                                  {@html processSVGForDisplay(icon, size, weight)}
                              </div>
                              <div class="icon-tooltip">{icon.name}</div>
                          </div>
                      </div>
                  {/each}
              </div>
          {/if}
      </div>
  {/if}

  <footer class="mt-4 text-sm text-gray-600 hidden">
      <p>{totalIcons} icons available.</p>
  </footer>
</div>