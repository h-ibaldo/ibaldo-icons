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
  <path d="M8 5L14 5"/>
  <path d="M8 10L14 10"/>
  <path d="M3 5L4 5"/>
  <path d="M3 10L4 10"/>
  <path d="M8 15L14 15"/>
  <path d="M3 15L4 15"/>
  <path d="M18 16L18 22"/>
  <path d="M21 19L15 19"/>
</svg>
