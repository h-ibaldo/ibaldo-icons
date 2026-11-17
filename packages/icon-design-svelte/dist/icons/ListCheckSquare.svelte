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
  <path d="M20 9L16 9"/>
  <path d="M20 13L16 13"/>
  <path d="M20 17L9 17"/>
  <path d="M20 21L9 21"/>
  <path d="M5 17L4 17"/>
  <path d="M5 21L4 21"/>
  <path d="M5.5 8L6.5 9L8.5 7"/>
  <path d="M10 13L4 13C2.895 13 2 12.105 2 11L2 5C2 3.895 2.895 3 4 3L10 3C11.105 3 12 3.895 12 5L12 11C12 12.105 11.105 13 10 13Z"/>
</svg>
