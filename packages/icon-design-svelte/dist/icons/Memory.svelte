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
  <path d="M9 2L15 2C16.105 2 17 2.895 17 4L17 20C17 21.105 16.105 22 15 22L9 22C7.895 22 7 21.105 7 20L7 4C7 2.895 7.895 2 9 2Z"/>
  <path d="M17 6L20 6"/>
  <path d="M4 6L7 6"/>
  <path d="M17 10L20 10"/>
  <path d="M4 10L7 10"/>
  <path d="M17 14L20 14"/>
  <path d="M4 14L7 14"/>
  <path d="M17 18L20 18"/>
  <path d="M11 6L13 6"/>
  <path d="M11 10L13 10"/>
  <path d="M11 14L13 14"/>
  <path d="M11 18L13 18"/>
  <path d="M4 18L7 18"/>
</svg>
