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
  <path d="M6 3L7 3L7 10"/>
  <path d="M5 16C5 14.895 5.895 14 7 14C8.105 14 9 14.895 9 16L9 16.172C9 16.703 8.789 17.211 8.414 17.586L5 21L9 21"/>
  <path d="M17 6L17 18"/>
  <path d="M14 15L17 18L20 15"/>
</svg>
