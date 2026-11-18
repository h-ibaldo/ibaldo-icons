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
  <path d="M22 15L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L15 22"/>
  <path d="M6 14L18 14L18 6L6 6Z"/>
  <path d="M14 18L11 18"/>
  <path d="M7 18L6 18"/>
  <path d="M22 22L19 19"/>
  <path d="M22 19L18 18L19 22"/>
</svg>
