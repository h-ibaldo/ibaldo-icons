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
  <path d="M2 22L2 2L14 2L14 22"/>
  <path d="M2 6L6 6"/>
  <path d="M2 10L6 10"/>
  <path d="M2 14L6 14"/>
  <path d="M2 18L6 18"/>
  <path d="M18 10L18 10"/>
  <path d="M18 14L18 14"/>
  <path d="M18 18L18 18"/>
  <path d="M18 10L18 10"/>
  <path d="M18 14L18 14"/>
  <path d="M10 14L10 14"/>
  <path d="M10 10L10 10"/>
  <path d="M10 6L10 6"/>
  <path d="M18 18L18 18"/>
  <path d="M22 22L22 7L14 4"/>
  <path d="M2 22L22 22"/>
  <path d="M10 18L10 22"/>
</svg>
