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
  <path d="M9 16L6 16C3.789 16 2 14.211 2 12C2 9.789 3.789 8 6 8L9 8"/>
  <path d="M15 16L18 16C20.211 16 22 14.211 22 12C22 9.789 20.211 8 18 8L15 8"/>
  <path d="M8 2L9 4"/>
  <path d="M16 2L15 4"/>
  <path d="M8 22L9 20"/>
  <path d="M16 22L15 20"/>
</svg>
