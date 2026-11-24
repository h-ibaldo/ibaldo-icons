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
  <path d="M10 2L14 2"/>
  <path d="M14 10L12 13"/>
  <path d="M20 5L22 7"/>
  <path d="M21 6L18.563 8.434"/>
  <path d="M2 13L8 13"/>
  <path d="M6 21L8 21"/>
  <path d="M4 17L8 17"/>
  <path d="M12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C9.039 5 6.465 6.609 5.078 9"/>
</svg>
