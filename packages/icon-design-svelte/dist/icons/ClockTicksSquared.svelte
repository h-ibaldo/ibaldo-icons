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
  <path d="M12 9L12 12L15 12"/>
  <path d="M12 5L12 5"/>
  <path d="M12 19L12 19"/>
  <path d="M19 12L19 12"/>
  <path d="M5 12L5 12"/>
  <path d="M16.949 7.051L16.949 7.051"/>
  <path d="M7.051 16.949L7.051 16.949"/>
  <path d="M16.949 16.949L16.949 16.949"/>
  <path d="M7.051 7.051L7.051 7.051"/>
  <path d="M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z"/>
</svg>
