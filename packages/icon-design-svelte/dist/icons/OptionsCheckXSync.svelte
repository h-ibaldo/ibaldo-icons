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
  <path d="M13 16.5C13 19.539 10.539 22 7.5 22C4.461 22 2 19.539 2 16.5C2 13.461 4.461 11 7.5 11C10.539 11 13 13.461 13 16.5Z"/>
  <path d="M9 15L6 18"/>
  <path d="M6 15L9 18"/>
  <path d="M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z"/>
  <path d="M15.5 7L16.5 8L18.5 6"/>
  <path d="M7 2L9 4L7 6"/>
  <path d="M3 8L3 7C3 5.344 4.344 4 6 4L9 4"/>
  <path d="M18 22L16 20L18 18"/>
  <path d="M22 16L22 17C22 18.656 20.656 20 19 20L16 20"/>
</svg>
