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
  <path d="M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"/>
  <path d="M8 17C7.449 17 7 16.551 7 16L7 13L6 12L7 11L7 8C7 7.449 7.449 7 8 7"/>
  <path d="M16 17C16.551 17 17 16.551 17 16L17 13L18 12L17 11L17 8C17 7.449 16.551 7 16 7"/>
  <path d="M11 14L13 10"/>
</svg>
