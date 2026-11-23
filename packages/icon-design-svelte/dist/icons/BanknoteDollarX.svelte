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
  <path d="M22 14L22 4L2 4L2 20L15 20"/>
  <path d="M17 4C17 6.762 19.238 9 22 9"/>
  <path d="M2 15C4.762 15 7 17.238 7 20"/>
  <path d="M2 9C4.762 9 7 6.762 7 4"/>
  <path d="M14.586 9C14.063 8.406 13.105 8 12 8C10.344 8 9 8.895 9 10C9 11.105 10.344 12 12 12"/>
  <path d="M9.414 15C9.938 15.594 10.895 16 12 16C13.656 16 15 15.105 15 14C15 12.895 13.656 12 12 12"/>
  <path d="M12 7L12 8"/>
  <path d="M12 16L12 17"/>
  <path d="M18 17L22 21"/>
  <path d="M22 17L18 21"/>
</svg>
