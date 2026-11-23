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
  <path d="M22 14L22 3L2 3L2 19L13 19"/>
  <path d="M17 3C17 5.762 19.238 8 22 8"/>
  <path d="M2 14C4.762 14 7 16.238 7 19"/>
  <path d="M2 8C4.762 8 7 5.762 7 3"/>
  <path d="M14.586 8C14.063 7.406 13.105 7 12 7C10.344 7 9 7.895 9 9C9 10.105 10.344 11 12 11"/>
  <path d="M9.414 14C9.938 14.594 10.895 15 12 15C13.656 15 15 14.105 15 13C15 11.895 13.656 11 12 11"/>
  <path d="M12 6L12 7"/>
  <path d="M12 15L12 16"/>
  <path d="M16 19L22 19"/>
  <path d="M19 16L19 22"/>
</svg>
