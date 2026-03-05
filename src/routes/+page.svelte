<script>
  import { onMount } from 'svelte';
  import ActionsBar from '$lib/components/ActionsBar.svelte';

  let iconsByCategory = {};
  let allIcons = [];
  let categories = [];
  let loadingCategory = false;
  let loadingCategories = true;
  let size = 24;
  let weight = 1.5;
  let currentCategory = '';
  let selectedCategory = '';
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
    // Match elements with stroke attribute, handling both self-closing (/>) and regular (>) tags
    processed = processed.replace(/(<[^>]*\sstroke=["'][^"']*["'][^>]*?)(\/?>)/gi, (match, before, closing) => {
      if (!match.match(/stroke-width=/i)) {
        // Insert stroke-width before the closing tag
        return `${before} stroke-width="${strokeWeight}"${closing}`;
      }
      // Replace existing stroke-width value
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
      return window.location.hash.slice(1) || '';
  }

  async function loadCategories() {
    try {
        // Load the index directly from static folder (no API needed)
        const res = await fetch('/icons-index.json?v=12');
        if (!res.ok) throw new Error('Failed to fetch index');
        const index = await res.json();
        // Load all icons from folder-based structure
        allIcons = [];
        const allFolderKeys = Object.keys(index.icons || {});
        for (const folder of allFolderKeys) {
            const iconList = index.icons?.[folder] || [];
            const categorizedIcons = iconList.map(icon => ({
                ...icon,
                svg: null
            }));
            allIcons.push(...categorizedIcons);
            iconsByCategory[folder] = categorizedIcons;
        }

        // Derive semantic categories from union of all icon.categories arrays
        const catSet = new Set();
        for (const icon of allIcons) {
            if (Array.isArray(icon.categories)) {
                for (const c of icon.categories) catSet.add(c);
            } else if (icon.category) {
                catSet.add(icon.category);
            }
        }
        categories = [...catSet].sort();

        // Sort all icons alphabetically by name after merging categories
        allIcons.sort((a, b) => a.name.localeCompare(b.name));

        console.log(`Loaded ${allIcons.length} total icons, ${categories.length} semantic categories`);

        // Preload first batch of icons
        const preloadCount = isMobile ? 20 : 50;
        const preloadBatch = allIcons.slice(0, preloadCount);
        const preloadPromises = preloadBatch.map(async (icon) => {
          const svg = await loadSVG(icon.path);
          icon.svg = svg;
        });

        // Wait for preloads to complete and trigger reactivity
        Promise.all(preloadPromises).then(() => {
          allIcons = [...allIcons];
        }).catch(err => {
          console.error('Error preloading icons:', err);
        });

    } catch (error) {
        console.error('Error loading categories:', error);
        categories = [];
        allIcons = [];
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
        const res = await fetch('/icons-index.json?v=12');
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
          allIcons = [...allIcons];
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
    // Detect mobile device once on mount (no resize listener needed)
    isMobile = window.innerWidth <= 768;

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
              allIcons = [...allIcons];
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
    // All icons are loaded at once, no need for category navigation

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });

  // Use all icons instead of category-specific icons
  $: currentIcons = allIcons;

  // Filter icons based on category and search
  $: filteredIcons = currentIcons.filter(icon => {
    if (selectedCategory) {
      const iconCats = Array.isArray(icon.categories) ? icon.categories : (icon.category ? [icon.category] : []);
      if (!iconCats.includes(selectedCategory)) return false;
    }
    if (!search) return true;

    const searchLower = search.toLowerCase();

    // Use pre-computed searchText if available (includes name, displayName, tags, description)
    if (icon.searchText) {
      return icon.searchText.includes(searchLower);
    }

    // Fallback to basic search
    return icon.name.toLowerCase().includes(searchLower) ||
           (icon.displayName && icon.displayName.toLowerCase().includes(searchLower)) ||
           (icon.tags && icon.tags.some(tag => tag.toLowerCase().includes(searchLower))) ||
           (icon.description && icon.description.toLowerCase().includes(searchLower));
  });

  // When search or category changes, preload first batch of newly visible icons.
  // Intentionally does NOT reference filteredIcons to avoid a reactive cycle.
  $: preloadOnFilterChange(search, selectedCategory);

  function preloadOnFilterChange(currentSearch, currentCategory) {
    const preloadCount = isMobile ? 15 : 50;
    const searchLower = currentSearch.toLowerCase();

    const iconsToLoad = allIcons
      .filter(icon => {
        if (!icon.path || icon.svg) return false;
        if (currentCategory) {
          const cats = Array.isArray(icon.categories) ? icon.categories : (icon.category ? [icon.category] : []);
          if (!cats.includes(currentCategory)) return false;
        }
        if (!currentSearch) return true;
        if (icon.searchText) return icon.searchText.includes(searchLower);
        return icon.name.toLowerCase().includes(searchLower) ||
          (icon.displayName && icon.displayName.toLowerCase().includes(searchLower)) ||
          (icon.tags && icon.tags.some(tag => tag.toLowerCase().includes(searchLower)));
      })
      .slice(0, preloadCount);

    if (iconsToLoad.length > 0) {
      const loadIcons = () => {
        Promise.all(iconsToLoad.map(icon => ensureSVGLoaded(icon))).then(() => {
          allIcons = [...allIcons];
        });
      };

      if (isMobile && 'requestIdleCallback' in window) {
        requestIdleCallback(loadIcons, { timeout: 200 });
      } else {
        setTimeout(loadIcons, 0);
      }
    }
  }

  $: totalIcons = allIcons.length;
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
    contain: layout style;
    content-visibility: auto;
    contain-intrinsic-size: 100px 100px;
  }

  /* Loading dots skeleton */
  .icon-skeleton {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
  }

  .icon-skeleton-frames {
    position: relative;
    width: 24px;
    height: 24px;
  }

  .icon-skeleton-frame {
    position: absolute;
    inset: 0;
    width: 24px;
    height: 24px;
    opacity: 0;
  }

  .icon-skeleton-frame:nth-child(1) { animation: dot-frame-1 0.8s steps(1, end) infinite; }
  .icon-skeleton-frame:nth-child(2) { animation: dot-frame-2 0.8s steps(1, end) infinite; }
  .icon-skeleton-frame:nth-child(3) { animation: dot-frame-3 0.8s steps(1, end) infinite; }
  .icon-skeleton-frame:nth-child(4) { animation: dot-frame-4 0.8s steps(1, end) infinite; }

  @keyframes dot-frame-1 {
    0%   { opacity: 1; }
    25%  { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes dot-frame-2 {
    0%   { opacity: 0; }
    25%  { opacity: 1; }
    50%  { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes dot-frame-3 {
    0%   { opacity: 0; }
    50%  { opacity: 1; }
    75%  { opacity: 0; }
    100% { opacity: 0; }
  }
  @keyframes dot-frame-4 {
    0%   { opacity: 0; }
    75%  { opacity: 1; }
    100% { opacity: 0; }
  }

  /* Mobile-specific optimizations */
  @media (max-width: 768px) {
    .icon-skeleton-frame {
      animation-duration: 1s;
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
    background: currentColor;
  }

  .range-input::-ms-track {
    height: 2px;
    background: currentColor;
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

  /* @media (min-width: 768px) {
    .hero-text-cols {
      grid-column: span 3;
    }
  } */

  @media (min-width: 900px) {
    .hero-text-cols {
      grid-column: span 2;
    }
  }

  /* @media (min-width: 1536px) {
    .hero-text-cols {
      grid-column: span 3;
    }
  } */

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
  
  .hero-text-cols a {
    transition: color 0.25s ease-in-out !important;
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

<ActionsBar bind:search bind:size bind:weight bind:selectedCategory {totalIcons} {categories} />
<div class="pb-4 pt-12 sm:px-14 w-full max-w-full overflow-hidden mobile-content" id="main-content" tabindex="-1">

  <div class="mb-8">
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
                  <div class="hero-text-cols row-span-1 sm:row-span-1 flex items-center justify-start sm:p-4 text-grid-cell">
                    <p class="text-sm font-medium leading-relaxed text-black text-start">
                        <a class="text-inherit hover:text-indigo-500 transition-all duration-200 ease-in-out" href="/about">
                            Icons made with conviction. <br>Multiple designs per concept. <br>For designers who refuse to settle.
                            <!-- <br>{totalIcons.toLocaleString()} line icons for designers  -->
                        </a>
                    </p>
                  </div>
                  {/if}

                  {#each filteredIcons as icon, index (icon.path)}
                      {#if index === 8 && !search && false}
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
                              class="icon-container rounded-lg p-1"
                              use:lazyLoadIcon={icon}
                              on:click={() => handleIconDownload(icon)}
                              on:pointerenter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                              on:pointerleave={(e) => e.currentTarget.style.backgroundColor = ''}
                              on:pointerdown={(e) => e.currentTarget.style.backgroundColor = '#cbd5e1'}
                              on:pointerup={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
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
                                      <div class="icon-skeleton" aria-hidden="true">
                                          <div class="icon-skeleton-frames">
                                              <svg class="icon-skeleton-frame" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect x="10.999999881978297" y="10.998779328575495" width="1.999999978605018" height="1.999999921429323" rx=".999402546253466" ry=".999402546253466" transform="translate(23.998778647914726 -.001221094594722) rotate(89.999997552246796)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="18.999999947934185" y="10.998779328575097" width="1.99999997860499" height="1.999999921430119" rx=".999402546133562" ry=".999402546133562" transform="translate(31.9987783751534 -8.0012211587186) rotate(89.9999975609948)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="2.999999947934185" y="10.998779328573221" width="1.99999997860499" height="1.99999992143387" rx=".99940254612814" ry=".99940254612814" transform="translate(15.998779056455868 7.998778841892505) rotate(89.99999756391297)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                              </svg>
                                              <svg class="icon-skeleton-frame" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect x="10.999999881978297" y="10.998779328588739" width="1.999999978605018" height="1.999999921402834" rx=".999402546252582" ry=".999402546252582" transform="translate(23.998778647996581 -.001221094512877) rotate(89.999997552637623)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="18.999999947934185" y="10.998779328521834" width="1.99999997860499" height="1.999999921536643" rx=".999402546192225" ry=".999402546192225" transform="translate(31.998778375262539 -8.001221158653124) rotate(89.999997561307453)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="1.999999898673892" y="9.998779368843088" width="3.999999957708923" height="3.999999804551408" rx="1.999997920799583" ry="1.999997920799583" transform="translate(15.998779090002927 7.998779217675681) rotate(89.999999159983446)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                              </svg>
                                              <svg class="icon-skeleton-frame" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect x="2.999999948112924" y="10.998776683092442" width="1.999999978602215" height="1.999999921578025" rx=".999402541403601" ry=".999402541403601" transform="translate(-7.998777875821485 15.998773073589172) rotate(-89.999983250229263)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="18.999999948026954" y="10.998779328648311" width="1.99999997860499" height="1.99999992128369" rx=".999402546144862" ry=".999402546144862" transform="translate(31.99877837268594 -8.001221160347349) rotate(89.999997553660279)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="9.999999933365473" y="9.998779376602897" width="3.999999939556687" height="3.999999792692279" rx="1.999997272166541" ry="1.999997272166541" transform="translate(.001220840982457 23.998779386859084) rotate(-90.000001006437031)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                              </svg>
                                              <svg class="icon-skeleton-frame" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect x="2.999999948115767" y="10.998779328660644" width="1.999999978599257" height="1.999999921545056" rx=".999402545212241" ry=".999402545212241" transform="translate(-7.998780490768279 15.998775810942911) rotate(-89.99998368859336)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="10.999996417186196" y="10.998779297442127" width="1.999999978594019" height="1.999999921584505" rx=".999402546153927" ry=".999402546153927" transform="translate(.001217659446544 23.99877617586343) rotate(-90.000002440789984)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                                  <rect x="17.99999641540478" y="9.99877931043596" width="3.999999936662107" height="3.999999921421143" rx="1.999999109019649" ry="1.999999109019649" transform="translate(31.998775906328149 -8.001216961737146) rotate(90.000000720339244)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                              </svg>
                                          </div>
                                      </div>
                                  {/if}
                              </div>
                          </div>
                          <div class="icon-tooltip" aria-hidden="true">{icon.displayName || icon.name}</div>
                      </div>
                  {/each}
              </div>
              {/if}
      {/if}
  </div>
</div>