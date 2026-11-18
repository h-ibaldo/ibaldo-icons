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
  <path d="M3 6L3 22L15 22L15 6"/>
  <path d="M22 6L2 6"/>
  <path d="M7 10L7 10"/>
  <path d="M11 10L11 10"/>
  <path d="M7 14L7 14"/>
  <path d="M11 14L11 14"/>
  <path d="M7 18L7 18"/>
  <path d="M11 22L11 18"/>
  <path d="M15 22L21 22L21 6"/>
  <path d="M18 14L18 14"/>
  <path d="M18 10L18 10"/>
  <path d="M18 18L18 18"/>
  <path d="M18 2L6 2"/>
  <path d="M3 6L6 2"/>
  <path d="M18 2L21 6"/>
  <path d="M12 2L15 6"/>
</svg>
