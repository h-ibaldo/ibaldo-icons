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
  <path d="M12 7C12 4.238 9.762 2 7 2C4.238 2 2 4.238 2 7C2 9.762 4.238 12 7 12C9.762 12 12 9.762 12 7Z"/>
  <path d="M7 2L7 7L12 7"/>
  <path d="M6 18L2 18L2 22L6 22Z"/>
  <path d="M10 16L6 16L6 22L10 22Z"/>
  <path d="M14 18L10 18L10 22L14 22Z"/>
  <path d="M18 13L14 13L14 22L18 22Z"/>
  <path d="M22 6L18 6L18 22L22 22Z"/>
</svg>
