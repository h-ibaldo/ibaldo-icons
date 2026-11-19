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
    export let onClose = () => {};

    const TABS = ['React', 'Svelte', 'SVG'];
    let tab = 'React';
    let copied = '';          // key of the last thing copied, for feedback
    let copiedTimer;
    let pngSize = 256;
    const PNG_SIZES = [64, 128, 256, 512, 1024];

    const fmt = (n) => String(Number(n));

    // SVG with the chosen size, stroke and color baked in
    function buildSvg(svg, { px = size, forPng = false } = {}) {
        if (!svg) return '';
        let out = svg
            .replace(/<svg([^>]*)>/i, (m, attrs) => {
                attrs = attrs.replace(/\s(width|height|stroke-width|class|style|aria-hidden)="[^"]*"/gi, '');
                attrs = attrs.replace(/\s+/g, ' ').trimEnd();
                return `<svg${attrs} width="${px}" height="${px}" stroke-width="${fmt(weight)}">`;
            })
            .replace(/>\s+</g, '>\n  <')
            .trim();
        const ink = color || (forPng ? '#000000' : '');
        if (ink) out = out.replace(/currentColor/g, ink);
        return out + '\n';
    }

    $: svgCode = buildSvg(icon?.svg);

    // Props that differ from the package defaults (size 24, strokeWidth 1.5, currentColor)
    $: props = [
        size !== 24 ? `size={${size}}` : '',
        Number(weight) !== 1.5 ? `strokeWidth={${fmt(weight)}}` : '',
        color ? `color="${color}"` : ''
    ].filter(Boolean).join(' ');

    $: reactCode = `import { ${icon.name} } from '@ibaldo/icons-react';\n\n<${icon.name}${props ? ' ' + props : ''} />\n`;
    $: svelteCode = `<script>\n  import { ${icon.name} } from '@ibaldo/icons-svelte';\n</` + `script>\n\n<${icon.name}${props ? ' ' + props : ''} />\n`;
    $: code = tab === 'React' ? reactCode : tab === 'Svelte' ? svelteCode : svgCode;

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

    function downloadPng() {
        const src = buildSvg(icon.svg, { px: pngSize, forPng: true });
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
        {#if icon.svg}
            {@html buildSvg(icon.svg, { px: 128 }).replace(/currentColor/g, color || 'white')}
        {/if}
    </div>

    <div class="info">
        <div class="title-row">
            <div>
                <h2 class="name">{icon.name}</h2>
                <p class="display">{icon.displayName || ''}</p>
            </div>
            <button type="button" class="icon-button" onclick={onClose} aria-label="Close">
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
                {copied === 'svg' ? 'Copied!' : 'Copy SVG'}
            </button>
            <button type="button" class="btn" onclick={downloadSvg}>Download SVG</button>
            <span class="png">
                <button type="button" class="btn" onclick={downloadPng}>Download PNG</button>
                <select bind:value={pngSize} aria-label="PNG size">
                    {#each PNG_SIZES as s}<option value={s}>{s}px</option>{/each}
                </select>
            </span>
        </div>
    </div>

    <div class="code">
        <div class="tabs" role="tablist">
            {#each TABS as t}
                <button type="button" role="tab" class="tab {tab === t ? 'active' : ''}" aria-selected={tab === t} onclick={() => (tab = t)}>{t}</button>
            {/each}
            <button type="button" class="copy-code" onclick={() => copy(code, 'code')}>
                {copied === 'code' ? 'Copied!' : 'Copy'}
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
        padding: 1rem;
        background: rgb(15 23 42);
        color: white;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
    }
    /* Big preview on the 24 grid */
    .preview {
        width: 168px;
        height: 168px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(30 41 59);
        background-image:
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
        background-size: 7px 7px; /* 168 / 24 */
        background-position: -0.5px -0.5px;
    }
    .preview :global(svg) { width: 168px; height: 168px; }
    .info { display: flex; flex-direction: column; gap: 0.75rem; min-width: 0; }
    .title-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; }
    .name { font-size: 18px; font-weight: 600; line-height: 1.2; word-break: break-word; }
    .display { font-size: 12px; color: rgba(255, 255, 255, 0.5); margin-top: 2px; }
    .chips { display: flex; flex-wrap: wrap; gap: 4px; }
    .chip {
        font-size: 11px;
        padding: 2px 6px;
        background: rgb(30 41 59);
        color: rgba(255, 255, 255, 0.7);
    }
    .chip-cat { background: rgb(51 65 85); color: white; }
    .actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
    .btn {
        height: 32px;
        padding: 0 0.75rem;
        font-size: 12px;
        color: white;
        background: rgb(51 65 85);
        border: none;
        cursor: pointer;
        transition: background-color 0.15s ease;
    }
    .btn:hover { background: rgb(71 85 105); }
    .btn.primary { background: #0900FF; }
    .btn.primary:hover { background: #0700CC; }
    .png { display: inline-flex; }
    .png select {
        height: 32px;
        padding: 0 1.6rem 0 0.5rem;
        font-size: 12px;
        color: white;
        background-color: rgb(30 41 59);
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
    .icon-button {
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.7);
        background: none;
        border: none;
        cursor: pointer;
    }
    .icon-button:hover { color: white; }
    .code { display: flex; flex-direction: column; min-width: 0; background: rgb(30 41 59); }
    .tabs { display: flex; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
    .tab {
        padding: 0.5rem 0.75rem;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.55);
        background: none;
        border: none;
        border-bottom: 1px solid transparent;
        margin-bottom: -1px;
        cursor: pointer;
    }
    .tab:hover { color: white; }
    .tab.active { color: white; border-bottom-color: white; }
    .copy-code {
        margin-left: auto;
        padding: 0.5rem 0.75rem;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
        background: none;
        border: none;
        cursor: pointer;
    }
    .copy-code:hover { color: white; }
    pre {
        margin: 0;
        padding: 0.75rem;
        flex: 1;
        max-height: 136px;
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 11.5px;
        line-height: 1.55;
        color: rgb(226 232 240);
        white-space: pre;
    }
    button:focus-visible, select:focus-visible { outline: 2px solid white; outline-offset: -2px; }

    @media (max-width: 860px) {
        .sheet { grid-template-columns: 120px minmax(0, 1fr); }
        .preview, .preview :global(svg) { width: 120px; height: 120px; }
        .preview { background-size: 5px 5px; }
        .code { grid-column: 1 / -1; }
    }
    @media (max-width: 768px) {
        .sheet-wrap { bottom: 0; }
        .sheet { width: 100vw; max-height: 85vh; overflow: auto; }
    }
</style>
