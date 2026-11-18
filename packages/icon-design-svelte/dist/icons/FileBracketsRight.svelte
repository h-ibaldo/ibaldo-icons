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
  <path d="M20 13L20 8.828C20 8.297 19.789 7.789 19.414 7.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C4.449 2 4 2.449 4 3L4 21C4 21.551 4.449 22 5 22L7 22"/>
  <path d="M13 2L13 8C13 8.551 13.449 9 14 9L20 9"/>
  <path d="M13 16L10 19L13 22"/>
  <path d="M18 16L21 19L18 22"/>
</svg>
