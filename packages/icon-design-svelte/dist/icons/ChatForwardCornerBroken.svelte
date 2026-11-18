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
  <path d="M11 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"/>
  <path d="M22 10L22 15C22 16.656 20.656 18 19 18L15 18L12 22"/>
  <path d="M15 4L22 4"/>
  <path d="M20 2L22 4L20 6"/>
</svg>
