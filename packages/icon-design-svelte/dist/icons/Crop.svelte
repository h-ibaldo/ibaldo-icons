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
  <path d="M6 2L6 16C6 17.105 6.895 18 8 18L22 18"/>
  <path d="M18 14L18 8C18 6.895 17.105 6 16 6L10 6"/>
  <path d="M6 6L2 6"/>
  <path d="M18 22L18 18"/>
</svg>
