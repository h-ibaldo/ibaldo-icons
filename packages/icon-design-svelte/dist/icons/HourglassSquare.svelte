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
  <path d="M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"/>
  <path d="M15.199 9.598L12 12L8.801 9.598C8.297 9.223 8 8.629 8 8L8 7L16 7L16 8C16 8.629 15.703 9.223 15.199 9.598Z"/>
  <path d="M8.801 14.402L12 12L15.199 14.402C15.703 14.777 16 15.371 16 16L16 17L8 17L8 16C8 15.371 8.297 14.777 8.801 14.402Z"/>
</svg>
