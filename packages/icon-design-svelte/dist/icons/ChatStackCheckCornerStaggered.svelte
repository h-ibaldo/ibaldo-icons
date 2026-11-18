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
  <path d="M14 4L15.5 6L20 2"/>
  <path d="M10 2L6 2C4.895 2 4 2.895 4 4L4 7L2 10L16 10C16.738 10 17.375 9.598 17.723 9"/>
  <path d="M6 22L20 22C21.105 22 22 21.105 22 20L22 16C22 14.895 21.105 14 20 14L10 14C8.895 14 8 14.895 8 16L8 19Z"/>
</svg>
