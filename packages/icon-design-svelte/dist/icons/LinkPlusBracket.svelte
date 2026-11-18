<script>
  /** @type {string} */
  export let color = 'currentColor';
  /** @type {number|string} */
  export let size = 24;
  /** @type {number|string} */
  export let strokeWidth = 1.5;
  /** @type {string} */
  let className = '';
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon-design {className}"
  {...$$restProps}
>
  <path d="M9 12L7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2"/>
  <path d="M15 2L17 2C19.762 2 22 4.238 22 7C22 9.762 19.762 12 17 12L15 12"/>
  <path d="M8 7L16 7"/>
  <path d="M19 16L19 22"/>
  <path d="M22 19L16 19"/>
</svg>
