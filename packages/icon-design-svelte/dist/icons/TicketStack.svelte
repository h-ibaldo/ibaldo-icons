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
  <path d="M9 7L9 9"/>
  <path d="M9 12L9 13"/>
  <path d="M9 16L9 17"/>
  <path d="M2 10L2 7L20 7L20 10C18.344 10 17 11.344 17 13C17 14.656 18.344 16 20 16L20 19L2 19L2 16C3.656 16 5 14.656 5 13C5 11.344 3.656 10 2 10Z"/>
  <path d="M4 7L4 4L22 4L22 7C21.23 7 20.531 7.289 20 7.766M19.004 10.168C19.094 11.746 20.398 13 22 13L22 16L20 16M4 15.234L4 13C4.348 13 4.684 12.941 4.996 12.832"/>
</svg>
