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
  <path d="M16 13C16 15.211 14.211 17 12 17C9.789 17 8 15.211 8 13C8 10.789 9.789 9 12 9C14.211 9 16 10.789 16 13Z"/>
  <path d="M9 15.621L9 22L12 21L15 22L15 15.621"/>
  <path d="M5 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 16C22 17.105 21.105 18 20 18L19 18"/>
  <path d="M6 6L18 6"/>
</svg>
