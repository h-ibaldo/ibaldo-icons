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
  <path d="M8 11L16 11"/>
  <path d="M8 7L10 7"/>
  <path d="M2 16L22 16"/>
  <path d="M4 16L4 3C4 2.448 4.448 2 5 2L19 2C19.552 2 20 2.448 20 3L20 16"/>
  <path d="M20 20L20 21C20 21.552 19.552 22 19 22L5 22C4.448 22 4 21.552 4 21L4 20"/>
</svg>
