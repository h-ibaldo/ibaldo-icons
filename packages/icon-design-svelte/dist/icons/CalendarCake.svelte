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
  <path d="M2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 7"/>
  <path d="M8 2L8 6"/>
  <path d="M16 2L16 6"/>
  <path d="M6 22L22 22"/>
  <path d="M8 22L8 16L20 16L20 22"/>
  <path d="M10 14L10 16"/>
  <path d="M14 14L14 16"/>
  <path d="M18 14L18 16"/>
  <path d="M11 11L10 10"/>
  <path d="M15 11L14 10"/>
  <path d="M19 11L18 10"/>
</svg>
