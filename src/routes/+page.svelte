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

  function handleWeightChange(event) {
    if (event.type === 'change') {
      isUpdatingWeight = true;
      setTimeout(() => {
        debouncedWeight = weight;
        isUpdatingWeight = false;
      }, 0);
    }
  }
  
  function getCategoryFromHash() {
      return window.location.hash.slice(1) || 'popular';
  }

  async function loadCategories() {
    try {
        const res = await fetch('/api/icons');
        if (!res.ok) throw new Error('Failed to fetch categories');
        categories = (await res.json()).categories;
    } catch (error) {
        console.error('Error loading categories:', error);
        categories = [];
    } finally {
        loadingCategories = false;
    }
  }

  async function loadCategory(category) {
    if (!category) return;
    
    try {
        loadingCategory = true;
        const res = await fetch(`/api/icons?category=${category}`);
        if (!res.ok) throw new Error('Failed to fetch icons');
        iconsByCategory[category] = (await res.json())[category];
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

<div class="p-4">
  <header class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Universal Icons</h1>
      <nav class="space-x-4">
          <a href="/about" class="text-blue-500 hover:text-blue-600">About</a>
          <a href="/license" class="text-blue-500 hover:text-blue-600">License</a>
          <a href="/api/download" class="text-blue-500 hover:text-blue-600">Download</a>
          <a href="/request-icon" class="text-blue-500 hover:text-blue-600">Request Icon</a>
          <a href="https://github.com/your-repo" class="text-blue-500 hover:text-blue-600">GitHub</a>
      </nav>
  </header>

  <div class="mb-6 flex items-center space-x-4">
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
              <div class="grid grid-cols-6 gap-4">
                  {#each filteredIcons as icon}
                      <div class="flex flex-col items-center">
                          <div style={`width: ${size}px; height: ${size}px;`}>
                              {@html icon.svg
                                .replace('<svg', `<svg style="stroke-width: ${debouncedWeight}px"`)
                                .replace('stroke-linecap:round', `stroke-width:${debouncedWeight};stroke-linecap:round`)
                              }
                          </div>
                          <p class="text-xs mt-1 text-gray-600 text-center">{icon.name}</p>
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