<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import ActionsBar from '$lib/components/ActionsBar.svelte';
  import IconDetail from '$lib/components/IconDetail.svelte';
  import { theme } from '$lib/theme.js';

  let iconsByCategory = {};
  let allIcons = [];
  let categories = [];
  let loadingCategory = false;
  let loadingCategories = true;
  let size = 48;
  let weight = 1.5;
  // Icon color ('' = default ink); the grid's `color` drives currentColor
  let iconColor = '';
  let currentCategory = '';
  let selectedCategories = [];
  let search = '';
  let svgCache = {};
  // SVG bundles (see scripts/generate-icons-index.js): chunk index -> URL,
  // and one promise per bundle so each is fetched once.
  let chunkUrls = [];
  const chunkLoads = new Map();
  // Bumped when SVGs arrive, so only the rendered cells update
  let svgTick = 0;

  // Cache for normalized SVGs (processed once on load, never re-processed)
  let normalizedSvgCache = new WeakMap();

  // Mobile optimization: detect mobile and adjust behavior
  let isMobile = false;

  // Virtualized grid: only the rows near the viewport are in the DOM.
  // The wrapper keeps the full height with padding, so the scrollbar is real.
  const BUFFER_ROWS = 4;
  let gridWrapper;
  let gridEl;
  let cols = 6;
  let rowHeight = 140;
  let startRow = 0;
  let endRow = 12;

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
    if (Number.isInteger(icon.chunk) && chunkUrls[icon.chunk]) {
      await loadChunk(icon.chunk);
      if (icon.svg) return;
    }
    if (!icon.path) return;
    try {
      icon.svg = await loadSVG(icon.path);
      svgTick++;
    } catch (error) {
      console.error(`Error loading SVG for ${icon.name}:`, error);
    }
  }

  // Fetch one SVG bundle and hand each SVG to its icon
  function loadChunk(n) {
    if (chunkLoads.has(n)) return chunkLoads.get(n);
    const promise = fetch(chunkUrls[n])
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${chunkUrls[n]}`);
        return res.json();
      })
      .then((bundle) => {
        for (const icon of allIcons) {
          if (icon.chunk === n && !icon.svg && bundle[icon.filename]) icon.svg = bundle[icon.filename];
        }
        svgTick++;
      })
      .catch((error) => {
        chunkLoads.delete(n); // allow a retry
        console.error(error);
      });
    chunkLoads.set(n, promise);
    return promise;
  }

  // Load the bundles of the icons being rendered, plus the next one
  function loadChunksFor(icons) {
    if (!chunkUrls.length) return;
    const needed = new Set();
    for (const icon of icons) if (!icon.svg && Number.isInteger(icon.chunk)) needed.add(icon.chunk);
    for (const n of needed) loadChunk(n);
    const last = icons.length ? icons[icons.length - 1].chunk : undefined;
    if (Number.isInteger(last) && last + 1 < chunkUrls.length) {
      const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
      idle(() => loadChunk(last + 1));
    }
  }

  // Process SVG for download (includes size and weight in the SVG itself)
  function processSVGForDownload(icon, targetSize, strokeWeight) {
    if (!icon || !icon.svg) return '';
    
    const svgString = icon.svg;
    let processed = svgString;
    // Downloaded SVGs carry the chosen color instead of currentColor
    if (iconColor) processed = processed.replace(/currentColor/g, iconColor);
    
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
        const res = await fetch(`${base}/icons-index.json?v=12`);
        if (!res.ok) throw new Error('Failed to fetch index');
        const index = await res.json();
        chunkUrls = (index.chunks || []).map((u) => base + u);
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
        allIcons.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.name.localeCompare(b.name));

        console.log(`Loaded ${allIcons.length} total icons, ${categories.length} semantic categories`);

        // The first bundle covers the first screens; start it right away
        if (chunkUrls.length) loadChunk(0);

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

  // Clicking an icon opens its detail sheet (copy code / SVG, download SVG / PNG).
  // The open icon is in the URL (?icon=Name) so the link can be shared.
  let selectedIcon = null;

  async function selectIcon(icon) {
    await ensureSVGLoaded(icon);
    selectedIcon = icon;
    svgTick++;
    const url = new URL(window.location.href);
    url.searchParams.set('icon', icon.name);
    history.replaceState(history.state, '', url);
  }

  function closeDetail() {
    selectedIcon = null;
    const url = new URL(window.location.href);
    url.searchParams.delete('icon');
    history.replaceState(history.state, '', url);
  }

  // Read the grid's real column count and row height (they change with the
  // breakpoints and on mobile), then work out which rows are near the viewport.
  function measureGrid() {
    if (!gridEl) return;
    const style = getComputedStyle(gridEl);
    const columns = style.gridTemplateColumns.split(' ').filter(Boolean).length;
    if (columns) cols = columns;
    const item = gridEl.querySelector('.icon-item');
    const gap = parseFloat(style.rowGap) || 0;
    if (item && item.offsetHeight) rowHeight = item.offsetHeight + gap;
  }

  function updateVisibleRows() {
    if (!gridWrapper) return;
    const top = gridWrapper.getBoundingClientRect().top; // viewport-relative
    const first = Math.floor(-top / rowHeight) - BUFFER_ROWS;
    const last = Math.ceil((window.innerHeight - top) / rowHeight) + BUFFER_ROWS;
    const nextStart = Math.max(0, first);
    const nextEnd = Math.max(nextStart + 1, last);
    if (nextStart !== startRow) startRow = nextStart;
    if (nextEnd !== endRow) endRow = nextEnd;
  }

  let frameRequested = false;
  function onScrollOrResize() {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(() => {
      frameRequested = false;
      measureGrid();
      updateVisibleRows();
    });
  }

  onMount(() => {
    // Detect mobile device once on mount (no resize listener needed)
    isMobile = window.innerWidth <= 768;

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    loadCategories().then(() => {
      onScrollOrResize();
      // Open the icon named in the URL, if any
      const name = new URL(window.location.href).searchParams.get('icon');
      const icon = name && allIcons.find((i) => i.name === name);
      if (icon) selectIcon(icon);
    });

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  });

  // Use all icons instead of category-specific icons
  $: currentIcons = allIcons;

  // Filter icons based on category and search
  // Search: an icon matches when every word of the query is in its search
  // text (name, aliases, tags, description, categories) or the whole query
  // is in its name. Results are ranked so the icons NAMED after the query come
  // first: exact name, name starts with it, name contains it, alias or display
  // name, exact tag, partial tag, and last description only. Inside a rank
  // the order stays alphabetical (Array.sort is stable).
  function searchRank(icon, words, joined) {
    const name = icon.name.toLowerCase();
    if (name === joined) return 0;
    if (name.startsWith(joined)) return 1;
    if (name.includes(joined)) return 2;
    if ((icon.aliases || []).some((a) => a.toLowerCase().includes(joined)) ||
        (icon.displayName || '').toLowerCase().includes(words.join(' '))) return 3;
    const tags = (icon.tags || []).map((t) => t.toLowerCase());
    if (words.every((w) => tags.includes(w))) return 4;
    if (words.every((w) => tags.some((t) => t.includes(w)))) return 5;
    return 6;
  }

  function matchesSearch(icon, words, joined) {
    const text = icon.searchText || [icon.name, icon.displayName, ...(icon.tags || []), icon.description || ''].join(' ').toLowerCase();
    return icon.name.toLowerCase().includes(joined) || words.every((w) => text.includes(w));
  }

  $: filteredIcons = (() => {
    // Several categories: an icon shows if it is in any of them
    const inCategory = selectedCategories.length
      ? currentIcons.filter((icon) => {
          const iconCats = Array.isArray(icon.categories) ? icon.categories : (icon.category ? [icon.category] : []);
          return iconCats.some((c) => selectedCategories.includes(c));
        })
      : currentIcons;
    const words = search.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return inCategory;
    const joined = words.join('');
    return inCategory
      .filter((icon) => matchesSearch(icon, words, joined))
      .map((icon) => ({ icon, rank: searchRank(icon, words, joined) }))
      .sort((x, y) => x.rank - y.rank)
      .map((x) => x.icon);
  })();

  // Virtual window over the filtered icons. The hero text takes the first
  // two cells of row 0 when there is no search.
  $: filtering = !!search || selectedCategories.length > 0;
  // The hero text sits in the middle of the second row, only when nothing is
  // filtered: 2 cells with an even column count (cols 4-5 of 8), 3 with an
  // odd one (cols 2-4 of 5), so it is always centered on the page.
  const HERO = { path: '__hero__', hero: true };
  $: heroSpan = cols % 2 ? 3 : 2;
  $: heroSlot = filtering ? -1 : cols + (cols - heroSpan) / 2;
  $: heroSlots = heroSlot >= 0 ? heroSpan : 0;
  $: totalRows = Math.ceil((filteredIcons.length + heroSlots) / cols);
  $: firstRow = Math.min(startRow, Math.max(0, totalRows - 1));
  $: lastRow = Math.min(totalRows, Math.max(endRow, firstRow + 1));

  // Items for grid cells [a, b), with the hero (n cells) inserted at slot h
  function sliceSlots(list, a, b, h, n) {
    if (h < 0) return list.slice(a, b);
    const out = list.slice(a, Math.max(a, Math.min(b, h)));
    if (a <= h && b > h) out.push(HERO);
    const start = Math.max(a, h + n) - n;
    const end = b - n;
    if (end > start) out.push(...list.slice(start, end));
    return out;
  }
  $: visibleItems = sliceSlots(filteredIcons, firstRow * cols, lastRow * cols, heroSlot, heroSpan);
  $: visibleIcons = visibleItems.filter((item) => item !== HERO);
  $: padTop = firstRow * rowHeight;
  $: padBottom = Math.max(0, (totalRows - lastRow) * rowHeight);
  $: loadChunksFor(visibleIcons);

  // A new filter can change the grid's height: re-measure after it renders
  $: filteredIcons, size, typeof window !== 'undefined' && onScrollOrResize();

  $: totalIcons = allIcons.length;
  // How many icons the search box searches: all of them, or only those in the
  // selected categories (an icon in two selected categories counts once)
  $: searchableCount = selectedCategories.length
    ? allIcons.filter((icon) => {
        const iconCats = Array.isArray(icon.categories) ? icon.categories : (icon.category ? [icon.category] : []);
        return iconCats.some((c) => selectedCategories.includes(c));
      }).length
    : totalIcons;
  $: categoryCounts = allIcons.reduce((counts, icon) => {
    for (const c of icon.categories || []) counts[c] = (counts[c] || 0) + 1;
    return counts;
  }, {});
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
  
  /* Hover / press / open-in-sheet backgrounds (CSS, so they follow the theme) */
  .icon-container:hover { background-color: #f1f5f9; }
  .icon-container:active { background-color: #cbd5e1; }
  .icon-container.selected { background-color: #e2e8f0; }
  :global(html.dark) .icon-container:hover { background-color: rgb(30 41 59); }
  :global(html.dark) .icon-container:active { background-color: rgb(51 65 85); }
  :global(html.dark) .icon-container.selected { background-color: rgb(30 41 59); }

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

<ActionsBar bind:search bind:size bind:weight bind:color={iconColor} bind:selectedCategories {totalIcons} {searchableCount} {categories} {categoryCounts} />
<div class="pb-4 pt-12 sm:px-14 w-full max-w-full overflow-hidden mobile-content" id="main-content" tabindex="-1">

  <div class="mb-8">
      {#if currentIcons.length > 0}
          {#if filteredIcons.length === 0 && filtering}
            <div class="flex items-center justify-center py-16">
              <p class="text-gray-600 text-sm">
                No icons found{search ? ` for "${search}"` : ''}{selectedCategories.length ? ` in ${selectedCategories.join(', ')}` : ''}
              </p>
            </div>
          {:else}
              <div bind:this={gridWrapper} style="padding-top: {padTop}px; padding-bottom: {padBottom}px;">
              <div
                  bind:this={gridEl}
                  class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-12 gap-y-10 sm:gap-x-4 justify-items-center"
                  role="list"
                  aria-label="Icon grid"
                  style="--icon-size: {size}px; --stroke-width: {weight}px;{iconColor ? ` color: ${iconColor};` : ''}"
              >
                  <!-- Hero text block - responsive column spans -->

                  {#each visibleItems as icon, index (icon.path)}
                    {#if icon === HERO}
                      <div class="hero-text-cols flex items-center justify-center text-center sm:p-4 text-grid-cell" style="grid-column: span {heroSpan};">
                        <p class="text-sm font-normal leading-relaxed text-black text-center">
                          <a class="text-inherit hover:text-indigo-500 transition-all duration-200 ease-in-out" href="{base}/about">
                            Icons made with conviction. <br>Multiple designs per concept. <br>For designers who refuse to settle.
                          </a>
                        </p>
                      </div>
                    {:else}
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
                              class="icon-container rounded-lg p-1 {selectedIcon === icon ? 'selected' : ''}"
                              on:click={() => selectIcon(icon)}
                              role="button"
                              tabindex="0"
                              aria-label="{icon.name} icon"
                              aria-pressed={selectedIcon === icon}
                              on:keydown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  selectIcon(icon);
                                }
                              }}
                          >
                              <div
                                  class="icon-wrapper"
                              >
                                  {#if svgTick >= 0 && icon.svg}
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
                    {/if}
                  {/each}
              </div>
              </div>
              {/if}
      {/if}
  </div>
</div>

{#if selectedIcon}
  <IconDetail icon={selectedIcon} {size} {weight} color={iconColor} defaultInk={$theme === 'dark' ? '#F8FAFC' : '#000000'} onClose={closeDetail} />
{/if}
