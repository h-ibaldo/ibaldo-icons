<script>
    // Color picker: saturation/brightness area, hue strip, hex field and
    // presets. `value` is a #RRGGBB string ('' = the default ink).
    export let value = '';
    export let presets = [];
    export let defaultColor = '#000000';
    // Wide layout: area on the left, controls on the right (full-width panel)
    export let wide = false;

    let hue = 0, sat = 0, val = 0; // h 0-360, s/v 0-1
    let hexInput = '';
    let area;

    const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

    function hexToRgb(hex) {
        const m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
        if (!m) return null;
        const n = parseInt(m[1], 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    const toHex = (r, g, b) => '#' + [r, g, b].map((c) => Math.round(c).toString(16).padStart(2, '0')).join('').toUpperCase();

    function rgbToHsv(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
        let h = 0;
        if (d) {
            if (max === r) h = ((g - b) / d) % 6;
            else if (max === g) h = (b - r) / d + 2;
            else h = (r - g) / d + 4;
            h *= 60;
            if (h < 0) h += 360;
        }
        return [h, max ? d / max : 0, max];
    }
    function hsvToHex(h, s, v) {
        const f = (n) => {
            const k = (n + h / 60) % 6;
            return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
        };
        return toHex(f(5) * 255, f(3) * 255, f(1) * 255);
    }

    // Keep the controls in sync when the value changes from outside
    let lastSet = null;
    $: if (value !== lastSet) syncFrom(value || defaultColor);
    function syncFrom(hex) {
        const rgb = hexToRgb(hex);
        if (!rgb) return;
        const [h, s, v] = rgbToHsv(...rgb);
        // keep the hue when the color has none (greys), so the area doesn't jump
        if (s > 0 && v > 0) hue = h;
        sat = s; val = v;
        hexInput = hex.toUpperCase();
        lastSet = value;
    }

    function setValue(hex) {
        value = hex;
        lastSet = hex;
        hexInput = hex;
    }

    // Saturation / brightness area
    function pointerArea(e) {
        const r = area.getBoundingClientRect();
        sat = clamp((e.clientX - r.left) / r.width, 0, 1);
        val = 1 - clamp((e.clientY - r.top) / r.height, 0, 1);
        setValue(hsvToHex(hue, sat, val));
    }
    function areaDown(e) {
        area.setPointerCapture(e.pointerId);
        pointerArea(e);
    }
    function areaMove(e) {
        if (area.hasPointerCapture(e.pointerId)) pointerArea(e);
    }
    function areaKey(e) {
        const step = e.shiftKey ? 0.1 : 0.02;
        if (e.key === 'ArrowLeft') sat = clamp(sat - step, 0, 1);
        else if (e.key === 'ArrowRight') sat = clamp(sat + step, 0, 1);
        else if (e.key === 'ArrowUp') val = clamp(val + step, 0, 1);
        else if (e.key === 'ArrowDown') val = clamp(val - step, 0, 1);
        else return;
        e.preventDefault();
        setValue(hsvToHex(hue, sat, val));
    }

    function onHue(e) {
        hue = Number(e.target.value);
        setValue(hsvToHex(hue, sat, val));
    }

    function onHex(e) {
        let v = e.target.value.trim();
        if (!v.startsWith('#')) v = '#' + v;
        hexInput = e.target.value;
        if (hexToRgb(v)) {
            value = v.toUpperCase();
            // syncFrom runs through the reactive statement
        }
    }

    $: current = (value || defaultColor).toUpperCase();
</script>

<div class="picker {wide ? 'wide' : ''}">
    <div
        class="area"
        bind:this={area}
        style="background-color: hsl({hue}, 100%, 50%)"
        role="slider"
        tabindex="0"
        aria-label="Saturation and brightness"
        aria-valuetext="{Math.round(sat * 100)}% saturation, {Math.round(val * 100)}% brightness"
        onpointerdown={areaDown}
        onpointermove={areaMove}
        onkeydown={areaKey}
    >
        <div class="handle" style="left: {sat * 100}%; top: {(1 - val) * 100}%; background: {current}"></div>
    </div>

    <div class="controls">
    <input
        class="hue"
        type="range"
        min="0"
        max="360"
        step="1"
        value={hue}
        oninput={onHue}
        aria-label="Hue"
    />

    <div class="row">
        <span class="swatch" style="background: {current}"></span>
        <input
            class="hex"
            type="text"
            value={hexInput}
            oninput={onHex}
            maxlength="7"
            spellcheck="false"
            autocomplete="off"
            aria-label="Hex color"
        />
    </div>

    {#if presets.length}
        <div class="presets">
            {#each presets as preset}
                {@const presetHex = (preset.value || defaultColor).toUpperCase()}
                <button
                    type="button"
                    class="preset {value === preset.value ? 'selected' : ''}"
                    style="background: {presetHex}"
                    title={preset.name}
                    aria-label={preset.name}
                    aria-pressed={value === preset.value}
                    onclick={() => { value = preset.value; }}
                ></button>
            {/each}
        </div>
    {/if}
    </div>
</div>

<style>
    /* Every swatch has the same light border, whatever its color */
    .picker {
        --swatch-border: #cbd5e1; /* slate-300 */
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .controls { display: flex; flex-direction: column; gap: 0.5rem; }
    .picker.wide {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr)); /* two equal columns */
        gap: 0.75rem;
    }
    /* Controls keep tight, even gaps; the area stretches to their height */
    .picker.wide .area { height: auto; min-height: 96px; }
    .picker.wide .controls { justify-content: flex-start; gap: 0.75rem; }
    .picker.wide .presets { padding-top: 0.75rem; }
    @media (max-width: 640px) {
        .picker.wide { grid-template-columns: 1fr; }
        .picker.wide .area { height: 120px; }
    }
    .area {
        position: relative;
        border-radius: var(--r-md);
        height: 120px;
        cursor: crosshair;
        touch-action: none;
        background-image: linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent);
        outline: none;
    }
    .area:focus-visible { box-shadow: 0 0 0 2px white; }
    .handle {
        position: absolute;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin: -7px 0 0 -7px;
        border: 2px solid white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
        pointer-events: none;
    }
    .hue {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 12px;
        margin: 0;
        border-radius: var(--r-full);
        background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
        cursor: pointer;
        outline: none;
    }
    .hue::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 8px;
        height: 16px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: var(--r-xs);
    }
    .hue::-moz-range-thumb {
        width: 8px;
        height: 16px;
        border-radius: var(--r-xs);
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.4);
    }
    .hue:focus-visible { box-shadow: 0 0 0 2px white; }
    .row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .swatch {
        border-radius: var(--r-sm);
        flex: 0 0 auto;
        width: 24px;
        height: 24px;
        border: 1px solid var(--swatch-border);
    }
    .hex {
        flex: 1;
        min-width: 0;
        height: 24px;
        padding: 0 0.5rem;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: var(--r-sm);
        color: white;
        font-size: 12px;
        font-variant-numeric: tabular-nums;
        text-transform: uppercase;
        box-shadow: none;
        outline: none;
    }
    .hex:focus { border-color: rgba(255, 255, 255, 0.4); box-shadow: none; }
    .presets {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        gap: 4px;
        padding-top: 0.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .preset {
        border-radius: var(--r-sm);
        aspect-ratio: 1;
        border: 1px solid var(--swatch-border);
        padding: 0;
        cursor: pointer;
    }
    /* Selected: a white ring outside the constant border */
    .preset.selected { box-shadow: 0 0 0 2px rgb(30 41 59), 0 0 0 3px white; }
    .preset:focus-visible { outline: 2px solid white; outline-offset: 1px; }
</style>
