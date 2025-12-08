<script>
  import { onMount } from 'svelte';
  
  let iconsByCategory = {};
  let categories = [];
  let loadingCategory = false;
  let loadingCategories = true;
  let size = 24;
  let weight = 1;
  let debouncedWeight = weight;
  let isUpdatingWeight = false;
  let currentCategory = 'popular';
  let search = '';
  let svgCache = {};

  function handleWeightChange(event) {
    if (event.type === 'change') {
      isUpdatingWeight = true;
      setTimeout(() => {
        debouncedWeight = weight;
        isUpdatingWeight = false;
      }, 0);
    }
  }

  function processSVGForDisplay(svgString, targetSize, strokeWeight) {
    if (!svgString) return '';
    
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
    
    return processed;
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
</style>

<div class="p-4">
  <header class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">icon.design</h1>
      <nav class="space-x-4">
          <a href="/about" class="text-blue-500 hover:text-blue-600">About</a>
          <a href="/license" class="text-blue-500 hover:text-blue-600">License</a>
          <a href="/api/download" class="text-blue-500 hover:text-blue-600">Download</a>
          <a href="/request-icon" class="text-blue-500 hover:text-blue-600">Request Icon</a>
          <a href="https://github.com/your-repo" class="text-blue-500 hover:text-blue-600">GitHub</a>
      </nav>
  </header>

  <div class="mb-6 flex items-center space-x-4 hidden">
      <div class="text-sm font-medium text-gray-500">Categories:</div>
      {#if loadingCategories}
          <div>Loading categories...</div>
      {:else}
          <nav class="flex flex-wrap gap-2">
              {#each categories as category}
                  <a
                      href="#{category}"
                      class="px-3 py-1 rounded-full text-sm transition-colors {currentCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}"
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
          placeholder="Search icons..."
          bind:value={search}
          class="border rounded p-2 w-full pr-10"
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
    <div class="flex space-x-4">
        <div>
            <label for="size" class="text-sm text-gray-600">Size</label>
            <input
                id="size"
                type="range"
                min="12"
                max="100"
                step="4"
                bind:value={size}
                class="w-full"
            />
            <span class="text-sm text-gray-600">{size}px</span>
        </div>
        <div>
            <label for="weight" class="text-sm text-gray-600">Weight</label>
            <input
                id="weight"
                type="range"
                min="0.5"
                max="2.5"
                step="0.5"
                bind:value={weight}
                on:change={handleWeightChange}
                class="w-full"
            />
            <span class="text-sm text-gray-600">{weight}</span>
            {#if isUpdatingWeight}
              <span class="text-sm text-gray-600 ml-2">Updating...</span>
            {/if}
        </div>
    </div>
  </div>

  {#if currentCategory}
      <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4 capitalize">
              {currentCategory} Icons
              {#if loadingCategory}
                  <span class="text-sm text-gray-600 ml-2">Loading...</span>
              {/if}
          </h2>
          {#if currentIcons.length > 0}
              <div class="flex flex-wrap gap-4">
                  {#each filteredIcons as icon}
                      <div class="flex flex-col items-center">
                          <div class="icon-container" style={`width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center;`}>
                              <div style={`width: ${size}px; height: ${size}px;`} class="icon-wrapper">
                                  {@html processSVGForDisplay(icon.svg, size, debouncedWeight)}
                              </div>
                              <div class="icon-tooltip">{icon.name}</div>
                          </div>
                      </div>
                  {/each}
              </div>
          {/if}
      </div>
  {/if}

  <footer class="mt-4 text-sm text-gray-600">
      <p>{totalIcons} icons available.</p>
  </footer>
</div>