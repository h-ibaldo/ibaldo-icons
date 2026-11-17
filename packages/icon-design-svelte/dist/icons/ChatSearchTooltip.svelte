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
  <path d="M2 5L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"/>
  <path d="M15.02 9.547C15.02 11.48 13.449 13.047 11.52 13.047C9.582 13.047 8.02 11.48 8.02 9.547C8.02 7.617 9.582 6.047 11.52 6.047C13.449 6.047 15.02 7.617 15.02 9.547Z"/>
  <path d="M13.992 12.023L16.016 14.047"/>
</svg>
