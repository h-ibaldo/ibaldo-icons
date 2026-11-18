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
  <path d="M7 2L6 2C4.895 2 4 2.895 4 4L4 9.172C4 9.703 3.789 10.211 3.414 10.586L2 12L3.414 13.414C3.789 13.789 4 14.297 4 14.828L4 20C4 21.105 4.895 22 6 22L7 22"/>
  <path d="M17 2L18 2C19.105 2 20 2.895 20 4L20 9.172C20 9.703 20.211 10.211 20.586 10.586L22 12L20.586 13.414C20.211 13.789 20 14.297 20 14.828L20 20C20 21.105 19.105 22 18 22L17 22"/>
  <path d="M9 12L15 12"/>
  <path d="M12 15L12 9"/>
</svg>
