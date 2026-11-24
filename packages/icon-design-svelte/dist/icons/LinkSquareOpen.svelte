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
  <path d="M22 13L22 17C22 19.762 19.762 22 17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L11 2"/>
  <path d="M19 10L20.965 8.035C22.344 6.656 22.344 4.414 20.965 3.035C19.586 1.656 17.344 1.656 15.965 3.035L14 5"/>
  <path d="M11 8L9.035 9.965C7.656 11.348 7.656 13.586 9.035 14.965C10.414 16.348 12.656 16.348 14.035 14.965L16 13"/>
  <path d="M17 7L13 11"/>
</svg>
