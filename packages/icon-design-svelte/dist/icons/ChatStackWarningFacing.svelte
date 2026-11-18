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
  <path d="M10 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14"/>
  <path d="M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 16"/>
  <path d="M13.77 3L9.73 9.996C8.961 11.332 9.922 12.996 11.461 12.996L19.191 12.996C20.883 12.996 21.941 11.164 21.098 9.699L17.234 3C16.461 1.664 14.539 1.664 13.77 3Z"/>
  <path d="M15.5 6.996L15.5 5.996"/>
  <path d="M15.5 9.996L15.5 9.996"/>
</svg>
