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
  <path d="M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"/>
  <path d="M9 9C9 7.344 10.344 6 12 6C13.656 6 15 7.344 15 9C15 10.656 13.656 12 12 12C10.344 12 9 10.656 9 9Z"/>
  <path d="M6 22L6 19C6 16.789 7.789 15 10 15L14 15C16.211 15 18 16.789 18 19L18 22"/>
</svg>
