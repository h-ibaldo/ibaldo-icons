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
  <path d="M17 2L5 2C3.344 2 2 3.344 2 5L2 13"/>
  <path d="M18 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18"/>
  <path d="M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 14"/>
  <path d="M22 2L22 2"/>
  <path d="M22 6L22 6"/>
  <path d="M22 10L22 10"/>
</svg>
