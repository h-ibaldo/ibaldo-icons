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
  <path d="M4 6L4 22L20 22L20 6"/>
  <path d="M22 6L2 6"/>
  <path d="M8 10L8 10"/>
  <path d="M12 10L12 10"/>
  <path d="M8 14L8 14"/>
  <path d="M12 14L12 14"/>
  <path d="M8 18L8 18"/>
  <path d="M12 22L12 18"/>
  <path d="M16 10L16 10"/>
  <path d="M16 14L16 14"/>
  <path d="M16 18L16 18"/>
  <path d="M7 2L17 2"/>
</svg>
