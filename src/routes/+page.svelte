<script>
  import { onMount, afterUpdate } from 'svelte';
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

  // Mobile optimization: detect mobile and adjust behavior
  let isMobile = false;
  let renderedIconsCount = 0;
  let loadingMoreIcons = false;

  // Passive event listeners for better scroll performance
  let scrollTimeout;

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
    // Also add aria-hidden="true" for accessibility (icons are decorative)
    normalized = normalized.replace(/<svg([^>]*)>/i, (match, attrs) => {
      // Ensure aria-hidden is set for accessibility
      let updatedAttrs = attrs;
      if (!updatedAttrs.match(/aria-hidden=/i)) {
        updatedAttrs += ' aria-hidden="true"';
      } else {
        updatedAttrs = updatedAttrs.replace(/\saria-hidden=["'][^"']*["']/gi, ' aria-hidden="true"');
      }
      
      // Check if style attribute exists
      if (updatedAttrs.match(/style=["']/i)) {
        // Add CSS variable to existing style
        updatedAttrs = updatedAttrs.replace(/style=["']([^"']*)["']/i, (styleMatch, styleContent) => {
          if (!styleContent.includes('--stroke-width')) {
            return `style="${styleContent}; --stroke-width: inherit"`;
          }
          return styleMatch;
        });
        return `<svg${updatedAttrs}>`;
      } else {
        // Add style attribute with CSS variable
        return `<svg${updatedAttrs} style="--stroke-width: inherit">`;
      }
    });
    
    return normalized;
  }

  // Get normalized SVG (processed once, cached forever)
  function getNormalizedSVG(icon) {
    if (!icon) return '';
    if (!icon.svg) return ''; // SVG not loaded yet
    
    if (!normalizedSvgCache.has(icon)) {
      const normalized = normalizeSVG(icon.svg);
      normalizedSvgCache.set(icon, normalized);
      return normalized;
    }
    
    return normalizedSvgCache.get(icon);
  }
  
  // Load SVG for an icon if not already loaded
  async function ensureSVGLoaded(icon) {
    if (icon.svg) return; // Already loaded
    if (!icon.path) return;
    
    try {
      const svg = await loadSVG(icon.path);
      icon.svg = svg;
    } catch (error) {
      console.error(`Error loading SVG for ${icon.name}:`, error);
    }
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
    processed = processed.replace(/(<[^>]*\sstroke=["'][^"']*["'][^>]*)(\/?)(>)/gi, (match, before, slash, after) => {
      if (!match.match(/stroke-width=/i)) {
        return `${before} stroke-width="${strokeWeight}"${slash}${after}`;
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
        
        // Store icons without SVG content initially (lazy loading)
        // Only load SVG content when icons become visible
        iconsByCategory[category] = iconList.map(icon => ({ ...icon, svg: null }));

        // Mobile optimization: smaller preload batch for mobile devices
        const preloadCount = isMobile ? 20 : 50;
        const preloadBatch = iconList.slice(0, preloadCount);
        const preloadPromises = preloadBatch.map(async (icon) => {
          const svg = await loadSVG(icon.path);
          const iconObj = iconsByCategory[category].find(i => i.path === icon.path);
          if (iconObj) iconObj.svg = svg;
        });

        // Wait for preloads to complete and trigger reactivity
        Promise.all(preloadPromises).then(() => {
          iconsByCategory = { ...iconsByCategory };
        }).catch(err => {
          console.error('Error preloading icons:', err);
        });
        
    } catch (error) {
        console.error(`Error loading ${category} icons:`, error);
    } finally {
        loadingCategory = false;
    }
  }

  let observer;
  
  // Handle icon download (used by both click and keyboard)
  async function handleIconDownload(icon) {
    await ensureSVGLoaded(icon);
    iconsByCategory = { ...iconsByCategory };
    const processedSVG = processSVGForDownload(icon, size, weight);
    downloadSVG(processedSVG, icon.filename || `${icon.name.toLowerCase().replace(/\s+/g, '-')}.svg`);
  }
  
  // Action for lazy loading icons
  function lazyLoadIcon(node, icon) {
    node.__icon = icon;
    if (observer) {
      // Check if element is already visible before observing
      // This handles cases where icons are filtered and become visible immediately
      const rect = node.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight + 50 && rect.bottom > -50;
      
      if (isVisible && icon && !icon.svg) {
        // Load immediately if already visible
        ensureSVGLoaded(icon).then(() => {
          iconsByCategory = { ...iconsByCategory };
        });
      } else {
        // Otherwise observe for when it becomes visible
        observer.observe(node);
      }
    }
    return {
      destroy() {
        if (observer) {
          observer.unobserve(node);
        }
      }
    };
  }
  
  onMount(async () => {
    // Detect mobile device
    isMobile = window.innerWidth <= 768;
    const handleResize = () => {
      isMobile = window.innerWidth <= 768;
    };
    window.addEventListener('resize', handleResize);

    // Set up Intersection Observer for lazy loading
    // Mobile optimization: smaller root margin for better performance
    observer = new IntersectionObserver((entries) => {
      // Batch SVG loads to prevent blocking
      const iconsToLoad = [];
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iconElement = entry.target;
          const icon = iconElement.__icon;
          if (icon && !icon.svg) {
            iconsToLoad.push(icon);
          }
          observer.unobserve(iconElement);
        }
      });

      // Load icons in small batches to prevent blocking scrolling
      if (iconsToLoad.length > 0) {
        loadingMoreIcons = true;
        const batchSize = isMobile ? 5 : 10;
        let currentBatch = 0;

        const loadNextBatch = () => {
          const start = currentBatch * batchSize;
          const batch = iconsToLoad.slice(start, start + batchSize);

          if (batch.length > 0) {
            Promise.all(batch.map(icon => ensureSVGLoaded(icon))).then(() => {
              iconsByCategory = { ...iconsByCategory };
              currentBatch++;
              if (currentBatch * batchSize < iconsToLoad.length) {
                // Use requestIdleCallback if available, otherwise setTimeout
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(() => loadNextBatch(), { timeout: 100 });
                } else {
                  setTimeout(loadNextBatch, 16); // ~60fps
                }
              } else {
                loadingMoreIcons = false;
              }
            });
          } else {
            loadingMoreIcons = false;
          }
        };

        loadNextBatch();
      }
    }, {
      rootMargin: isMobile ? '100px' : '50px' // Load earlier on mobile for smoother scrolling
    });

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

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('resize', handleResize);
    };
  });

  $: currentIcons = iconsByCategory[currentCategory] || [];

  // Filter icons based on search
  $: filteredIcons = currentIcons.filter(icon => 
    icon.name.toLowerCase().includes(search.toLowerCase())
  );

  // Track previous search to detect changes
  let previousSearch = '';
  let previousFilteredLength = 0;

  // When filtered icons change (e.g., due to search), preload first batch
  afterUpdate(() => {
    // Check if search changed or filtered icons changed
    if (search !== previousSearch || filteredIcons.length !== previousFilteredLength) {
      previousSearch = search;
      previousFilteredLength = filteredIcons.length;

      // Mobile optimization: smaller preload batch for search results
      const preloadCount = isMobile ? 15 : 50;

      // Load first batch of filtered icons that don't have SVG loaded yet
      // This ensures icons are ready when they become visible
      const iconsToLoad = filteredIcons
        .filter(icon => !icon.svg && icon.path)
        .slice(0, preloadCount);

      if (iconsToLoad.length > 0) {
        // Use requestIdleCallback to avoid blocking UI on mobile
        const loadIcons = () => {
          Promise.all(iconsToLoad.map(icon => ensureSVGLoaded(icon))).then(() => {
            iconsByCategory = { ...iconsByCategory };
          });
        };

        if (isMobile && 'requestIdleCallback' in window) {
          requestIdleCallback(loadIcons, { timeout: 200 });
        } else {
          setTimeout(loadIcons, 0);
        }
      }
    }
  });

  $: totalIcons = Object.values(iconsByCategory)
      .reduce((sum, icons) => sum + (Array.isArray(icons) ? icons.length : 0), 0);
</script>

<style>
  .icon-wrapper {
    /* Use CSS variable from parent grid for size - no per-icon updates needed */
    width: var(--icon-size, 24px);
    height: var(--icon-size, 24px);
    /* GPU acceleration hint */
    transform: translateZ(0);
  }
  
  :global(.icon-wrapper svg) {
    width: 100% !important;
    height: 100% !important;
  }
  
  /* Apply stroke-width to all stroke elements via CSS - this is the key to smooth performance */
  /* Target all SVG elements that can have stroke - CSS will override any SVG attributes */
  /* Uses CSS variable from parent grid - cascades down automatically */
  :global(.icon-wrapper svg *[stroke]) {
    stroke-width: var(--stroke-width, 1px) !important;
  }
  
  .icon-container {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    /* CSS containment for performance - isolates layout/style/paint calculations */
    contain: layout style paint;
    /* Content visibility - skip rendering off-screen icons */
    content-visibility: auto;
    contain-intrinsic-size: 100px 100px;
  }

  /* Improved loading skeleton with shimmer effect */
  .icon-skeleton {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  /* Mobile-specific optimizations */
  @media (max-width: 768px) {
    .icon-container {
      /* Stronger containment on mobile */
      contain: strict;
    }

    /* Reduce animation on mobile for better performance */
    .icon-skeleton {
      animation: shimmer 2s infinite;
    }
  }
  
  /* Visible focus indicator for keyboard navigation */
  .icon-container:focus-visible {
    outline: 3px solid #0900FF;
    outline-offset: 2px;
    border-radius: 8px;
  }
  
  /* Icon item wrapper - positioning context for tooltip */
  .icon-item {
    position: relative;
  }
  
  .icon-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
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
  
  .icon-item:hover .icon-tooltip,
  .icon-item:focus-within .icon-tooltip {
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
  
  /* Optimize grid performance during size/weight changes */
  :global([role="list"]) {
    /* Hint to browser that size/weight will change */
    will-change: auto;
  }

  /* Screen reader only class for accessible text */
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

  /* Text grid cells styling */
  /* .text-grid-cell {
    min-height: 200px;
  } */

  .attribution-grid-cell {
    min-height: 100px;
  }

  .hero-text-cols {
    grid-column: span 2;
  }
  
  @media (max-width: 430px) {
    .hero-text-cols {
      grid-column: span 2;
    }
  }

  @media (min-width: 768px) {
    .hero-text-cols {
      grid-column: span 3;
    }
  }

  @media (min-width: 900px) {
    .hero-text-cols {
      grid-column: span 2;
    }
  }

  @media (min-width: 1536px) {
    .hero-text-cols {
      grid-column: span 3;
    }
  }

  @media (min-width: 1920px) {
    .hero-text-cols {
      grid-column: span 2;
    }
  }
  

  /* Mobile: add padding for fixed bottom actions bar */
  @media (max-width: 768px) {
    .mobile-content {
      padding-bottom: 120px !important; /* Space for fixed bottom bar */
    }
    
    /* Adjust text cells on mobile */
    /* .text-grid-cell {
      min-height: 150px;
    } */
  }

  @media (max-width: 639px) {
    .icon-container {
      width: 50px;
      height: 50px;
      contain-intrinsic-size: 50px 50px;
    }
  }
  
</style>

<!-- Loading status announcement for screen readers -->
<div aria-live="polite" aria-atomic="true" class="sr-only">
  {#if loadingCategory}
    Loading icons...
  {:else if filteredIcons.length > 0}
    {filteredIcons.length} {filteredIcons.length === 1 ? 'icon' : 'icons'} found
  {/if}
</div>

<ActionsBar bind:search bind:size bind:weight {totalIcons} />
<div class="pb-4 pt-12 sm:px-14 w-full max-w-full overflow-hidden mobile-content" id="main-content" tabindex="-1">

  {#if currentCategory}
      <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4 capitalize hidden">
              {currentCategory} Icons
              {#if loadingCategory}
                  <span class="text-sm text-gray-600 ml-2">Loading...</span>
              {/if}
          </h2>
          {#if currentIcons.length > 0}
              {#if filteredIcons.length === 0 && search}
                <div class="flex items-center justify-center py-16">
                  <p class="text-gray-600 text-sm">No icons found for "{search}"</p>
                </div>
              {:else}
              <div
                  class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-y-10 sm:gap-x-4 justify-items-center"
                  role="list"
                  aria-label="Icon grid"
                  style="--icon-size: {size}px; --stroke-width: {weight}px;"
              >
                  <!-- Hero text block - responsive column spans -->
                  {#if !search}
                  <div class="hero-text-cols row-span-1 sm:row-span-2 flex items-center justify-center sm:p-4 text-grid-cell">
                    <p class="text-xs sm:text-2xl font-normal leading-relaxed text-black text-start">
                      <span class="font-medium">Icons are opinions.</span><br>
                      Choose variations,<br>
                      not conclusions.
                    </p>
                  </div>
                  {/if}

                  {#each filteredIcons as icon, index (icon.path)}
                      {#if index === 8 && !search}
                        <!-- Attribution text - positioned based on grid columns -->
                        <!-- 4 col: 2,4-4,4 | 6 col: 5,3-6,3 | 8 col: 7,3-8,3 | 12 col: 10,4-11,4 -->
                        <div class="col-span-2 row-span-2 col-start-3 row-start-4
                                    sm:col-span-2 sm:row-span-1 sm:col-start-3 sm:row-start-5
                                    md:col-span-2 md:col-start-5 md:row-start-5
                                    xl:col-span-2 xl:col-start-7 xl:row-start-4
                                    2xl:col-span-2 2xl:col-start-11 2xl:row-start-4
                                    flex items-center justify-start p-4 attribution-grid-cell">
                          <p class="text-xs text-gray-600 leading-relaxed">
                            Designed by <br class="sm:hidden">Henrique Ibaldo <br>as a long-term <br class="sm:hidden">design system.
                          </p>
                        </div>
                      {/if}
                      <div class="flex flex-col items-center icon-item" role="listitem">
                          <div 
                              class="icon-container rounded-lg p-1 transition-colors hover:bg-slate-200 active:bg-slate-300" 
                              use:lazyLoadIcon={icon}
                              on:click={() => handleIconDownload(icon)}
                              role="button"
                              tabindex="0"
                              aria-label="Download {icon.name} icon"
                              on:keydown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleIconDownload(icon);
                                }
                              }}
                          >
                              <div
                                  class="icon-wrapper"
                              >
                                  {#if icon.svg}
                                      {@html getNormalizedSVG(icon)}
                                  {:else}
                                      <div class="icon-skeleton" aria-hidden="true"></div>
                                  {/if}
                              </div>
                          </div>
                          <div class="icon-tooltip" aria-hidden="true">{icon.name}</div>
                      </div>
                  {/each}
              </div>
              {/if}
          {/if}
      </div>
  {/if}

  <footer class="mt-4 text-sm text-gray-600 hidden">
      <p>{totalIcons} icons available.</p>
  </footer>
</div>