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
  <path d="M22 6L22 5C22 3.344 20.656 2 19 2L18 2"/>
  <path d="M6 2L5 2C3.344 2 2 3.344 2 5L2 6"/>
  <path d="M2 18L2 19C2 20.656 3.344 22 5 22L6 22"/>
  <path d="M18 22L19 22C20.656 22 22 20.656 22 19L22 18"/>
  <path d="M10 4L12 2L14 4"/>
  <path d="M14 20L12 22L10 20"/>
  <path d="M4 14L2 12L4 10"/>
  <path d="M20 10L22 12L20 14"/>
</svg>
