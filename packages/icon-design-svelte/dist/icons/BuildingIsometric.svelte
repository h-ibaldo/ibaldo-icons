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
  <path d="M3 6L12 10L21 6L12 2Z"/>
  <path d="M3 6L3 18L12 22L21 18L21 6"/>
  <path d="M18 11L18 11"/>
  <path d="M18 15L18 15"/>
  <path d="M15 13L15 13"/>
  <path d="M12 22L12 10"/>
  <path d="M15 17L15 17"/>
  <path d="M6 11L6 11"/>
  <path d="M6 15L6 15"/>
  <path d="M9 13L9 13"/>
  <path d="M9 17L9 17"/>
</svg>
