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
  <path d="M20 10L20 7.984C20 7.355 19.75 6.75 19.305 6.305L15.695 2.695C15.25 2.25 14.645 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L7 22"/>
  <path d="M14 2L14 7C14 7.551 14.449 8 15 8L20 8"/>
  <path d="M10 12L10 22L20 22"/>
  <path d="M13 19L15 15L17 18L20 13"/>
</svg>
