<script>
  import { onMount } from 'svelte';
  import ActionsBar from '$lib/components/ActionsBar.svelte';

  let iconsByCategory = {};
  let categories = [];
  let loadingCategory = false;
  let loadingCategories = true;
  let size = 24;
  let weight = 1.5;
  let currentCategory = 'popular';
  let search = '';
  let svgCache = {};
  
  // Cache for normalized SVGs (processed once on load, never re-processed)
  let normalizedSvgCache = new WeakMap();

  // Normalize SVG once on load: remove width/height, prepare for CSS control
  // This is the key to Lucide's smooth performance - process once, control via CSS
  function normalizeSVG(svgString) {
    if (!svgString) return '';
    
    let normalized = svgString;
    
    // Remove width and height attributes (we'll control via CSS)
    normalized = normalized.replace(/(<svg[^>]*\s)width=["'][^"']*["']/gi, '$1');
    normalized = normalized.replace(/(<svg[^>]*\s)height=["'][^"']*["']/gi, '$1');
    
    // Ensure SVG has viewBox (required for CSS sizing)
    if (!normalized.match(/viewBox=/i)) {
      normalized = normalized.replace(/<svg/i, '<svg viewBox="0 0 24 24"');
    }
    
    // Remove any existing stroke-width attributes from child elements
    // We'll control this via CSS custom property - this is critical for performance
    normalized = normalized.replace(/\sstroke-width=["'][^"']*["']/gi, '');
    
    // Add CSS variable to SVG element itself so it can be inherited by child elements
    // This ensures the variable is available to all stroke elements
    normalized = normalized.replace(/<svg([^>]*)>/i, (match, attrs) => {
      // Check if style attribute exists
      if (attrs.match(/style=/i)) {
        // Add CSS variable to existing style
        return match.replace(/style=["']([^"']*)["']/i, (styleMatch, styleContent) => {
          if (!styleContent.includes('--stroke-width')) {
            return `style="${styleContent}; --stroke-width: inherit"`;
          }
          return styleMatch;
        });
      } else {
        // Add style attribute with CSS variable
        return `<svg${attrs} style="--stroke-width: inherit">`;
      }
    });
    
    return normalized;
  }

  // Get normalized SVG (processed once, cached forever)
  function getNormalizedSVG(icon) {
    if (!icon || !icon.svg) return '';
    
    if (!normalizedSvgCache.has(icon)) {
      const normalized = normalizeSVG(icon.svg);
      normalizedSvgCache.set(icon, normalized);
      return normalized;
    }
    
    return normalizedSvgCache.get(icon);
  }

  // Process SVG for download (includes size and weight in the SVG itself)
  function processSVGForDownload(icon, targetSize, strokeWeight) {
    if (!icon || !icon.svg) return '';
    
    const svgString = icon.svg;
    let processed = svgString;
    
    // Update width and height
    processed = processed.replace(/(<svg[^>]*\s)width=["']\d+["']/gi, `$1width="${targetSize}"`);
    processed = processed.replace(/(<svg[^>]*\s)height=["']\d+["']/gi, `$1height="${targetSize}"`);
    
    // Add stroke-width to all stroke elements
    processed = processed.replace(/(<[^>]*\sstroke=["'][^"']*["'][^>]*)(>)/gi, (match, before, after) => {
      if (!match.match(/stroke-width=/i)) {
        return `${before} stroke-width="${strokeWeight}"${after}`;
      }
      return match.replace(/stroke-width=["'][^"']*["']/gi, `stroke-width="${strokeWeight}"`);
    });
    
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
  
  /* Apply stroke-width to all stroke elements via CSS - this is the key to smooth performance */
  /* Target all SVG elements that can have stroke - CSS will override any SVG attributes */
  :global(.icon-wrapper svg *[stroke]) {
    stroke-width: var(--stroke-width, 1px) !important;
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
    background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
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

<ActionsBar bind:search bind:size bind:weight {totalIcons} />
<div class="p-4 w-full max-w-full">

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
                              class="icon-container rounded-lg p-1 transition-colors hover:bg-slate-200 active:bg-slate-300" 
                              style={`width: 100px; height: 100px; display: flex; align-items: center; justify-content: center;`}
                              on:click={() => {
                                const processedSVG = processSVGForDownload(icon, size, weight);
                                downloadSVG(processedSVG, icon.filename || `${icon.name.toLowerCase().replace(/\s+/g, '-')}.svg`);
                              }}
                              role="button"
                              tabindex="0"
                              on:keydown={(e) => {
                                if (e.key === 'Enter') {
                                  const processedSVG = processSVGForDownload(icon, size, weight);
                                  downloadSVG(processedSVG, icon.filename || `${icon.name.toLowerCase().replace(/\s+/g, '-')}.svg`);
                                }
                              }}
                          >
                              <div 
                                  style={`width: ${size}px; height: ${size}px;`} 
                                  class="icon-wrapper"
                              >
                                  {@html getNormalizedSVG(icon).replace(
                                    /<svg([^>]*)>/i,
                                    (match, attrs) => {
                                      // Update or add --stroke-width in style attribute
                                      if (attrs.match(/style=["']/i)) {
                                        return match.replace(
                                          /style=["']([^"']*)["']/i,
                                          (styleMatch, styleContent) => {
                                            const updated = styleContent.replace(/--stroke-width:[^;]*/i, `--stroke-width: ${weight}px`);
                                            return updated.includes('--stroke-width')
                                              ? `style="${updated}"`
                                              : `style="${styleContent}; --stroke-width: ${weight}px"`;
                                          }
                                        );
                                      } else {
                                        return `<svg${attrs} style="--stroke-width: ${weight}px">`;
                                      }
                                    }
                                  )}
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