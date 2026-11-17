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
  <path d="M2 9L2 22L7 18L14 18C15.656 18 17 16.656 17 15L17 9C17 7.344 15.656 6 14 6L5 6C3.344 6 2 7.344 2 9Z"/>
  <path d="M20 14L17 14"/>
  <path d="M5 6L5 5C5 3.344 6.344 2 8 2L18 2"/>
  <path d="M22 2L22 2"/>
  <path d="M22 6L22 6"/>
  <path d="M22 10L22 10"/>
</svg>
