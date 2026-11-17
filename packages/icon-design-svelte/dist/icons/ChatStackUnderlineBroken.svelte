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
  <path d="M17 2L5 2C3.344 2 2 3.344 2 5L2 11"/>
  <path d="M14 18L17 16L19 16C20.656 16 22 14.656 22 13L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 13C6 14.656 7.344 16 9 16L11 16"/>
  <path d="M19 22L9 22"/>
</svg>
