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
  <path d="M22 2L22 2"/>
  <path d="M22 6L22 6"/>
  <path d="M22 10L22 10"/>
  <path d="M22 15L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L12 18"/>
  <path d="M2 4L2 12C2 13.105 2.895 14 4 14L5 14L5 18L10 14L15 14C16.105 14 17 13.105 17 12L17 4C17 2.895 16.105 2 15 2L4 2C2.895 2 2 2.895 2 4Z"/>
</svg>
