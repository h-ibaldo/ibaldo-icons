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
  <path d="M7 20L12 22L17 20"/>
  <path d="M7 4L12 6L17 4"/>
  <path d="M17 4L12 2L7 4"/>
  <path d="M7 11L2 9L2 18L7 20"/>
  <path d="M7 20L7 4"/>
  <path d="M17 20L17 4"/>
  <path d="M12 22L12 6"/>
  <path d="M7 7L2 9"/>
  <path d="M17 11L22 9L22 18L17 20"/>
  <path d="M17 7L22 9"/>
</svg>
