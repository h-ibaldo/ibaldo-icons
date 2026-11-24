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
  <path d="M16.918 2L2 2"/>
  <path d="M17 10L2 10"/>
  <path d="M22 2L22 15C22 16.656 20.656 18 19 18L13 18"/>
  <path d="M9 18L2 18"/>
  <path d="M17 14L13 18L17 22"/>
</svg>
