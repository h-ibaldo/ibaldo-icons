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
  <path d="M6 14L7 14L7 21"/>
  <path d="M5 5C5 3.895 5.895 3 7 3C8.105 3 9 3.895 9 5L9 5.172C9 5.703 8.789 6.211 8.414 6.586L5 10L9 10"/>
  <path d="M17 6L17 18"/>
  <path d="M14 15L17 18L20 15"/>
</svg>
