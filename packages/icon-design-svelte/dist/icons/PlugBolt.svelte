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
  <path d="M3 9L15 9L15 13C15 15.762 12.762 18 10 18L8 18C5.238 18 3 15.762 3 13Z"/>
  <path d="M9 18L9 22"/>
  <path d="M12 4L12 9"/>
  <path d="M6 4L6 9"/>
  <path d="M22 2L18 6L22 6L18 11"/>
</svg>
