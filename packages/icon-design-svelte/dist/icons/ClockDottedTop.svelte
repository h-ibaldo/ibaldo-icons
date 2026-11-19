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
  <path d="M12 7L12 12L17 14"/>
  <path d="M22 2L22 2"/>
  <path d="M22 6L22 6"/>
  <path d="M22 10L22 10"/>
  <path d="M17 3.359C15.527 2.5 13.824 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C16.477 22 20.262 19.055 21.535 15"/>
</svg>
