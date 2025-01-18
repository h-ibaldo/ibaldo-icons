<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  let iconsByCategory = {};
  let categories = [];
  let loadingCategory = false;
  let loadingCategories = true;
  let search = '';
  let size = 24;
  let weight = 1;
  let debouncedWeight = weight;
  let isUpdatingWeight = false;
  let version = '';
  let currentCategory = 'popular';

  function handleWeightChange(event) {
    if (event.type === 'change') {  // Fires on mouseup/touch end
      isUpdatingWeight = true;
      // Small delay to allow loading state to render
      setTimeout(() => {
        debouncedWeight = weight;
        isUpdatingWeight = false;
      }, 0);
    }
  }
  
  // Get category from URL hash
  function getCategoryFromHash() {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      return hash || 'popular'; // Default to 'popular' if no hash
  }

  async function loadCategories() {
    try {
        const res = await fetch('/api/icons');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        categories = data.categories;
    } catch (error) {
        console.error('Error loading categories:', error);
        categories = [];
    } finally {
        loadingCategories = false;
    }
  }

  async function loadCategory(category) {
    if (!category || iconsByCategory[category]) return;
    
    try {
        loadingCategory = true;
        const res = await fetch(`/api/icons?category=${category}`);
        if (!res.ok) throw new Error('Failed to fetch icons');
        const data = await res.json();
        
        iconsByCategory = {
            ...iconsByCategory,
            [category]: data[category]
        };
    } catch (error) {
        console.error(`Error loading ${category} icons:`, error);
    } finally {
        loadingCategory = false;
    }
  }

  onMount(async () => {
    // First load available categories
    await loadCategories();
    
    // Set initial category from URL and load it
    currentCategory = getCategoryFromHash();
    await loadCategory(currentCategory);
    
    // Listen to hash changes
    window.addEventListener('hashchange', async () => {
        const newCategory = getCategoryFromHash();
        currentCategory = newCategory;
        await loadCategory(newCategory);
    });
  });

  function filteredIcons(category) {
      const icons = iconsByCategory[category] || [];
      if (!Array.isArray(icons)) return [];
      return icons.filter(icon => 
          icon.name.toLowerCase().includes(search.toLowerCase())
      );
  }

  // Calculate total icons
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
    <input
        type="text"
        placeholder="Search icons..."
        bind:value={search}
        class="border rounded p-2 w-full mb-2"
    />
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
          {#if iconsByCategory[currentCategory]}
              <div class="grid grid-cols-6 gap-4">
                  {#each filteredIcons(currentCategory) as icon}
                      <div class="flex flex-col items-center">
                          <div style={`width: ${size}px; height: ${size}px;`}>
                              {@html icon.svg.replace('<svg', `<svg style="stroke-width: ${debouncedWeight}"`)}
                          </div>
                          <p class="text-xs mt-1 text-gray-600">{icon.name}</p>
                      </div>
                  {/each}
              </div>
          {/if}
      </div>
  {/if}

  <footer class="mt-4 text-sm text-gray-600">
      <p>{totalIcons} icons available. Version: {version}</p>
  </footer>
</div>