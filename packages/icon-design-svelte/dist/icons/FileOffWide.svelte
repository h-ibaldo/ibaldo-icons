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
  <path d="M15 3L15 8C15 8.551 15.449 9 16 9L21 9"/>
  <path d="M2 2L22 22"/>
  <path d="M8 3L15.172 3C15.703 3 16.211 3.211 16.586 3.586L20.414 7.414C20.789 7.789 21 8.297 21 8.828L21 16"/>
  <path d="M20.414 20.414C20.051 20.777 19.551 21 19 21L5 21C3.895 21 3 20.105 3 19L3 5C3 4.449 3.223 3.949 3.586 3.586"/>
</svg>
