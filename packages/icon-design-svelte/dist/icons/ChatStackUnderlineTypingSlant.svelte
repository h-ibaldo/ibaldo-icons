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
  <path d="M2 9L2 13C2 14.656 3.344 16 5 16L7 16L7 19L13 16L15 16C16.656 16 18 14.656 18 13L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z"/>
  <path d="M22 11L22 5C22 3.344 20.656 2 19 2L7 2"/>
  <path d="M15 22L5 22"/>
  <path d="M6 11L6 11"/>
  <path d="M10 11L10 11"/>
  <path d="M14 11L14 11"/>
</svg>
