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
  <path d="M19 12L19 8.828C19 8.297 18.789 7.789 18.414 7.414L13.586 2.586C13.211 2.211 12.703 2 12.172 2L3 2C2.449 2 2 2.449 2 3L2 21C2 21.551 2.449 22 3 22L5 22"/>
  <path d="M12 2L12 8C12 8.551 12.449 9 13 9L19 9"/>
  <path d="M11 16L8 19L11 22"/>
  <path d="M19 16L22 19L19 22"/>
  <path d="M14 22L16 16"/>
</svg>
