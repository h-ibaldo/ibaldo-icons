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
  <path d="M4 13L4 3C4 2.449 4.449 2 5 2L13.172 2C13.703 2 14.211 2.211 14.586 2.586L19.414 7.414C19.789 7.789 20 8.297 20 8.828L20 21C20 21.551 19.551 22 19 22L17 22"/>
  <path d="M13 2L13 8C13 8.551 13.449 9 14 9L20 9"/>
  <path d="M6 16L3 19L6 22"/>
  <path d="M11 16L14 19L11 22"/>
</svg>
