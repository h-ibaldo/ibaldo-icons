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
  <path d="M16 22L17 14"/>
  <path d="M20 22L21 14"/>
  <path d="M15 16L22 16"/>
  <path d="M15 20L22 20"/>
  <path d="M21.797 10C20.871 5.438 16.836 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22"/>
</svg>
