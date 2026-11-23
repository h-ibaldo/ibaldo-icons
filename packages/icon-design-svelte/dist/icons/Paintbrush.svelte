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
  <path d="M8 9L2 15L9 22L15 16"/>
  <path d="M19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8L16 11L19 14L16 17L7 8L10 5L13 8L16 5C16 3.344 17.344 2 19 2Z"/>
  <path d="M4 13L12 19"/>
</svg>
