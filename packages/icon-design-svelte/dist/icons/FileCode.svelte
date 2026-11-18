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
  <path d="M6 12L6 3C6 2.449 6.449 2 7 2L15.172 2C15.703 2 16.211 2.211 16.586 2.586L21.414 7.414C21.789 7.789 22 8.297 22 8.828L22 21C22 21.551 21.551 22 21 22L19 22"/>
  <path d="M15 2L15 8C15 8.551 15.449 9 16 9L22 9"/>
  <path d="M5 16L2 19L5 22"/>
  <path d="M13 16L16 19L13 22"/>
  <path d="M8 22L10 16"/>
</svg>
