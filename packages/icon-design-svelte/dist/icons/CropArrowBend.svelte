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
  <path d="M18 6L20 8L22 6"/>
  <path d="M20 8L20 4C20 2.895 19.105 2 18 2L14 2"/>
  <path d="M6 18L4 16L2 18"/>
  <path d="M4 16L4 20C4 21.105 4.895 22 6 22L10 22"/>
  <path d="M8 6L8 14C8 15.105 8.895 16 10 16L18 16"/>
  <path d="M16 13L16 10C16 8.895 15.105 8 14 8L11 8"/>
  <path d="M8 8L6 8"/>
  <path d="M16 18L16 16"/>
</svg>
