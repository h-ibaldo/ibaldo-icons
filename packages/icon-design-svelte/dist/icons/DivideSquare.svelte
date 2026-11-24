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
  <path d="M13 7C13 7.555 12.551 8 12 8C11.449 8 11 7.555 11 7C11 6.445 11.449 6 12 6C12.551 6 13 6.445 13 7Z"/>
  <path d="M13 17C13 17.555 12.551 18 12 18C11.449 18 11 17.555 11 17C11 16.445 11.449 16 12 16C12.551 16 13 16.445 13 17Z"/>
  <path d="M6 12L18 12"/>
  <path d="M5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22Z"/>
</svg>
