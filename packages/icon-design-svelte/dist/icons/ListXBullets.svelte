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
  <path d="M10.117 4L22.117 4"/>
  <path d="M10.117 12L22.117 12"/>
  <path d="M10.117 20L22.117 20"/>
  <path d="M6.117 2L2.117 6"/>
  <path d="M2.117 2L6.117 6"/>
  <path d="M6.117 10L2.117 14"/>
  <path d="M2.117 10L6.117 14"/>
  <path d="M6.117 18L2.117 22"/>
  <path d="M2.117 18L6.117 22"/>
</svg>
