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
  <path d="M2 2L22 22"/>
  <path d="M4.93 4.93C6.738 3.121 9.238 2 12 2C17.523 2 22 6.477 22 12C22 14.762 20.879 17.262 19.07 19.07M16.117 21.117C14.859 21.684 13.469 22 12 22C6.477 22 2 17.523 2 12C2 10.531 2.316 9.141 2.883 7.883"/>
  <path d="M9 9L9 7L13 7C14.656 7 16 8.344 16 10C16 11.656 14.656 13 13 13"/>
  <path d="M9 17.125L9 14"/>
</svg>
