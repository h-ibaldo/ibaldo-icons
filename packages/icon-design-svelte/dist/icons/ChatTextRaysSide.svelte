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
  <path d="M7 18L20 18C21.105 18 22 17.105 22 16L22 8C22 6.895 21.105 6 20 6L7 6C5.895 6 5 6.895 5 8L5 10L2 12L5 14L5 16C5 17.105 5.895 18 7 18Z"/>
  <path d="M9 10L18 10"/>
  <path d="M9 14L15 14"/>
  <path d="M13 2L13 3"/>
  <path d="M7 2L8 3"/>
  <path d="M19 2L18 3"/>
  <path d="M13 22L13 21"/>
  <path d="M19 22L18 21"/>
  <path d="M7 22L8 21"/>
</svg>
