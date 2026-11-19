<script>
    // Icon detail sheet: opens at the bottom when an icon is clicked.
    // Preview on the 24 grid, name and tags, code for each package, and
    // copy / download as SVG or PNG. Uses the current size, weight and color.
    import { onMount, onDestroy } from 'svelte';
    import { fly } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';

    export let icon;          // { name, displayName, filename, tags, categories, svg }
    export let size = 24;
    export let weight = 1.5;
    export let color = '';    // '' = currentColor
    export let defaultInk = '#000000'; // what the default color looks like (follows the theme)
    export let onClose = () => {};

    const TABS = ['React', 'Svelte', 'Vue', 'React Native'];
    let tab = 'React';
    let copied = '';          // key of the last thing copied, for feedback
    let copiedTimer;

    const fmt = (n) => String(Number(n));

    // SVG with the chosen size, stroke and color baked in
    // Every input is a parameter, so reactive statements re-run when the bar's
    // size, weight or color change
    function buildSvg(svg, { px, stroke, ink }) {
        if (!svg) return '';
        let out = svg
            .replace(/<svg([^>]*)>/i, (m, attrs) => {
                attrs = attrs.replace(/\s(width|height|stroke-width|class|style|aria-hidden)="[^"]*"/gi, '');
                attrs = attrs.replace(/\s+/g, ' ').trimEnd();
                return `<svg${attrs} width="${px}" height="${px}" stroke-width="${fmt(stroke)}">`;
            })
            .replace(/>\s+</g, '>\n  <')
            .trim();
        if (ink) out = out.replace(/currentColor/g, ink);
        return out + '\n';
    }

    $: svgCode = buildSvg(icon?.svg, { px: size, stroke: weight, ink: color });
    // Preview: same stroke (in grid units) as the icons on the page
    $: previewSvg = buildSvg(icon?.svg, { px: 168, stroke: weight, ink: color || defaultInk });

    // Props that differ from the package defaults (size 24, strokeWidth 1.5, currentColor)
    $: props = [
        size !== 24 ? `size={${size}}` : '',
        Number(weight) !== 1.5 ? `strokeWidth={${fmt(weight)}}` : '',
        color ? `color="${color}"` : ''
    ].filter(Boolean).join(' ');

    // Package tabs show (and copy) only the component.
    // Vue binds non-string props with ":" and uses kebab-case (stroke-width).
    $: component = `<${icon.name}${props ? ' ' + props : ''} />`;
    $: vueProps = [
        size !== 24 ? `:size="${size}"` : '',
        Number(weight) !== 1.5 ? `:stroke-width="${fmt(weight)}"` : '',
        color ? `color="${color}"` : ''
    ].filter(Boolean).join(' ');
    $: vueComponent = `<${icon.name}${vueProps ? ' ' + vueProps : ''} />`;
    $: code = tab === 'Vue' ? vueComponent : component;

    async function copy(text, key) {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            // Fallback for browsers without the async clipboard
            const ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
        }
        copied = key;
        clearTimeout(copiedTimer);
        copiedTimer = setTimeout(() => (copied = ''), 1400);
    }

    function save(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // Download names come from the icon name: AvatarFaceCurly -> avatar-face-curly
    const baseName = () =>
        icon.name
            .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
            .toLowerCase();

    function downloadSvg() {
        save(new Blob([svgCode], { type: 'image/svg+xml' }), `${baseName()}.svg`);
    }

    // PNG at the size chosen in the actions bar
    function downloadPng() {
        const pngSize = size;
        const src = buildSvg(icon.svg, { px: pngSize, stroke: weight, ink: color || defaultInk });
        const img = new Image();
        const url = URL.createObjectURL(new Blob([src], { type: 'image/svg+xml' }));
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = pngSize;
            canvas.getContext('2d').drawImage(img, 0, 0, pngSize, pngSize);
            URL.revokeObjectURL(url);
            canvas.toBlob((blob) => blob && save(blob, `${baseName()}-${pngSize}.png`), 'image/png');
        };
        img.src = url;
    }

    function onKey(e) {
        if (e.key === 'Escape') onClose();
    }
    onMount(() => window.addEventListener('keydown', onKey));
    onDestroy(() => {
        if (typeof window !== 'undefined') window.removeEventListener('keydown', onKey);
        clearTimeout(copiedTimer);
    });

    const label = (c) => c.charAt(0).toUpperCase() + c.slice(1);
</script>

<div class="sheet-wrap">
<section class="sheet" role="dialog" aria-label="{icon.displayName || icon.name} icon" transition:fly={{ y: 40, duration: 220, easing: cubicOut }}>
    <div class="preview">
        {#if icon.svg}{@html previewSvg}{/if}
    </div>

    <div class="info">
        <div class="title-row">
            <div>
                <h2 class="name">{icon.name}</h2>
                <p class="display">{icon.displayName || ''}</p>
            </div>
            <button type="button" class="icon-button close" onclick={onClose} aria-label="Close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                    <line x1="2" y1="22" x2="22" y2="2"></line><line x1="22" y1="22" x2="2" y2="2"></line>
                </svg>
            </button>
        </div>

        {#if icon.tags?.length || icon.categories?.length}
            <div class="chips">
                {#each icon.categories || [] as c}<span class="chip chip-cat">{label(c)}</span>{/each}
                {#each (icon.tags || []).slice(0, 8) as t}<span class="chip">{t}</span>{/each}
            </div>
        {/if}

        <div class="actions">
            <button type="button" class="btn primary" onclick={() => copy(svgCode, 'svg')}>
                <span class="swap"><span class:off={copied === 'svg'}>Copy SVG</span><span class:off={copied !== 'svg'} aria-live="polite">Copied!</span></span>
            </button>
            <button type="button" class="btn" onclick={downloadSvg}>Download SVG</button>
            <button type="button" class="btn" onclick={downloadPng}>Download PNG</button>
        </div>
    </div>

    <div class="code">
        <div class="tabs" role="tablist">
            {#each TABS as t}
                <button type="button" role="tab" class="tab {tab === t ? 'active' : ''}" aria-selected={tab === t} onclick={() => (tab = t)}>{t}</button>
            {/each}
            <button type="button" class="copy-code" onclick={() => copy(code, 'code')}>
                <span class="swap"><span class:off={copied === 'code'}>Copy</span><span class:off={copied !== 'code'} aria-live="polite">Copied!</span></span>
            </button>
        </div>
        <pre><code>{code}</code></pre>
    </div>
</section>
</div>

<style>
    /* Fixed, centered wrapper; the sheet itself animates (fly) freely */
    .sheet-wrap {
        position: fixed;
        z-index: 60;
        left: 0;
        right: 0;
        bottom: 16px;
        display: flex;
        justify-content: center;
        pointer-events: none;
    }
    .sheet {
        pointer-events: auto;
        width: min(960px, calc(100vw - 32px));
        display: grid;
        grid-template-columns: 168px minmax(0, 1fr) minmax(0, 1.1fr);
        gap: 1.25rem;
        position: relative;
        padding: 1rem;
        background: white;
        color: rgb(15 23 42);
        border: 1px solid rgb(226 232 240);
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
    }
    /* Big preview on the 24 grid */
    .preview {
        width: 168px;
        height: 168px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(248 250 252);
        background-image:
            linear-gradient(rgb(226 232 240) 1px, transparent 1px),
            linear-gradient(90deg, rgb(226 232 240) 1px, transparent 1px);
        background-size: 7px 7px; /* 168 / 24 */
        background-position: -0.5px -0.5px;
    }
    .preview :global(svg) { width: 168px; height: 168px; }
    .info { display: flex; flex-direction: column; gap: 0.75rem; min-width: 0; }
    .title-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
    .name { font-size: 18px; font-weight: 600; line-height: 1.2; word-break: break-word; }
    .display { font-size: 12px; color: rgb(100 116 139); margin-top: 2px; }
    .chips { display: flex; flex-wrap: wrap; gap: 4px; }
    .chip {
        font-size: 11px;
        padding: 2px 6px;
        background: rgb(241 245 249);
        color: rgb(71 85 105);
    }
    .chip-cat { background: rgb(51 65 85); color: white; }
    .actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
    .btn {
        height: 32px;
        padding: 0 0.75rem;
        font-size: 12px;
        color: rgb(15 23 42);
        background: rgb(241 245 249);
        border: none;
        cursor: pointer;
        transition: background-color 0.15s ease;
    }
    .btn:hover { background: rgb(226 232 240); }
    /* Both labels share one grid cell, so the button keeps the width of the
       longer one when "Copy" turns into "Copied!" */
    .swap { display: inline-grid; }
    .swap > span { grid-area: 1 / 1; text-align: center; }
    .swap > .off { visibility: hidden; }
    .btn.primary { background: #0900FF; color: white; }
    .btn.primary:hover { background: #0700CC; }
    .icon-button {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(100 116 139);
        background: none;
        border: none;
        cursor: pointer;
    }
    .icon-button:hover { color: rgb(15 23 42); }
    /* Close sits in the sheet's top-right corner, not inside a column */
    .close { position: absolute; top: 0.5rem; right: 0.5rem; }
    .code { display: flex; flex-direction: column; min-width: 0; background: rgb(248 250 252); margin-right: 1.75rem; }
    .tabs { display: flex; align-items: center; border-bottom: 1px solid rgb(226 232 240); }
    .tab {
        padding: 0.5rem 0.75rem;
        font-size: 12px;
        color: rgb(100 116 139);
        background: none;
        border: none;
        border-bottom: 1px solid transparent;
        margin-bottom: -1px;
        cursor: pointer;
    }
    .tab:hover { color: rgb(15 23 42); }
    .tab.active { color: rgb(15 23 42); border-bottom-color: rgb(15 23 42); }
    .copy-code {
        margin-left: auto;
        padding: 0.5rem 0.75rem;
        font-size: 12px;
        color: rgb(71 85 105);
        background: none;
        border: none;
        cursor: pointer;
    }
    .copy-code:hover { color: rgb(15 23 42); }
    pre {
        margin: 0;
        padding: 0.75rem;
        flex: 1;
        max-height: 136px;
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 11.5px;
        line-height: 1.55;
        color: rgb(30 41 59);
        white-space: pre;
    }
    /* Dark theme */
    :global(html.dark) .sheet {
        background: rgb(15 23 42);
        color: rgb(241 245 249);
        border-color: rgb(51 65 85);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    }
    :global(html.dark) .preview {
        background-color: rgb(30 41 59);
        background-image:
            linear-gradient(rgb(51 65 85) 1px, transparent 1px),
            linear-gradient(90deg, rgb(51 65 85) 1px, transparent 1px);
    }
    :global(html.dark) .display { color: rgb(148 163 184); }
    :global(html.dark) .chip { background: rgb(30 41 59); color: rgb(203 213 225); }
    :global(html.dark) .chip.chip-cat { background: rgb(71 85 105); color: white; }
    :global(html.dark) .btn { background: rgb(30 41 59); color: rgb(241 245 249); }
    :global(html.dark) .btn:hover { background: rgb(51 65 85); }
    :global(html.dark) .btn.primary { background: #0900FF; color: white; }
    :global(html.dark) .btn.primary:hover { background: #0700CC; }
    :global(html.dark) .icon-button { color: rgb(148 163 184); }
    :global(html.dark) .icon-button:hover { color: white; }
    :global(html.dark) .code { background: rgb(30 41 59); }
    :global(html.dark) .tabs { border-bottom-color: rgb(51 65 85); }
    :global(html.dark) .tab, :global(html.dark) .copy-code { color: rgb(148 163 184); }
    :global(html.dark) .tab:hover, :global(html.dark) .copy-code:hover, :global(html.dark) .tab.active { color: white; }
    :global(html.dark) .tab.active { border-bottom-color: white; }
    :global(html.dark) pre { color: rgb(226 232 240); }

    button:focus-visible, select:focus-visible { outline: 2px solid #0900FF; outline-offset: -2px; }

    @media (max-width: 860px) {
        .sheet { grid-template-columns: 120px minmax(0, 1fr); }
        .preview, .preview :global(svg) { width: 120px; height: 120px; }
        .preview { background-size: 5px 5px; }
        .code { grid-column: 1 / -1; margin-right: 0; }
    }
    @media (max-width: 768px) {
        .sheet-wrap { bottom: 0; }
        .sheet { width: 100vw; max-height: 85vh; overflow: auto; }
    }
</style>
