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
  <path d="M12 8C12 10.762 9.762 13 7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3C9.762 3 12 5.238 12 8Z"/>
  <path d="M7 6L7 8L9 8"/>
</svg>
