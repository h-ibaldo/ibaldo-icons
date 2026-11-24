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
  <path d="M22 15L22 2L2 2L2 18L13 18"/>
  <path d="M17 2C17 4.762 19.238 7 22 7"/>
  <path d="M2 13C4.762 13 7 15.238 7 18"/>
  <path d="M2 7C4.762 7 7 4.762 7 2"/>
  <path d="M14.586 7C14.063 6.406 13.105 6 12 6C10.344 6 9 6.895 9 8C9 9.105 10.344 10 12 10"/>
  <path d="M9.414 13C9.938 13.594 10.895 14 12 14C13.656 14 15 13.105 15 12C15 10.895 13.656 10 12 10"/>
  <path d="M12 5L12 6"/>
  <path d="M12 14L12 15"/>
  <path d="M19 15L19 22"/>
  <path d="M22 19L19 22L16 19"/>
</svg>
