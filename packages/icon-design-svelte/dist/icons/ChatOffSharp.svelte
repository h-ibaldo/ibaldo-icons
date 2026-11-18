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
  <path d="M21.449 15.25C21.801 14.23 22 13.141 22 12C22 6.477 17.523 2 12 2C11.051 2 10.133 2.141 9.262 2.387"/>
  <path d="M3 2L21 21"/>
  <path d="M5.383 4.516C3.313 6.348 2 9.016 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C14.789 22 17.309 20.855 19.121 19.016"/>
</svg>
