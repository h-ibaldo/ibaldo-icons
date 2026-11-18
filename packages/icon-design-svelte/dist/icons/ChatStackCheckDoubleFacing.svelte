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
  <path d="M6 7L6.5 9L10 6"/>
  <path d="M10.176 8.707L10.5 10L14 7"/>
  <path d="M2 4L2 18L7 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"/>
  <path d="M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 10.414C22 9.508 21.641 8.641 21 8"/>
</svg>
