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
  <path d="M16.918 22L2 22"/>
  <path d="M17 14L2 14"/>
  <path d="M22 22L22 9C22 7.344 20.656 6 19 6L13 6"/>
  <path d="M9 6L2 6"/>
  <path d="M17 10L13 6L17 2"/>
</svg>
