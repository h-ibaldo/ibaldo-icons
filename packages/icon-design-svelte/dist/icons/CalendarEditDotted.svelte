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
  <path d="M8 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 10"/>
  <path d="M8 2L8 6"/>
  <path d="M16 2L16 6"/>
  <path d="M2 10L22 10"/>
  <path d="M21.293 15.293L19.707 13.707C19.316 13.316 18.684 13.316 18.293 13.707L13 19L13 22L16 22L21.293 16.707C21.684 16.316 21.684 15.684 21.293 15.293Z"/>
  <path d="M6 14L6 14"/>
  <path d="M10 14L10 14"/>
  <path d="M6 18L6 18"/>
</svg>
