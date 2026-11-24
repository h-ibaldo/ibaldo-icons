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
  <path d="M10 4L12 2L14 4"/>
  <path d="M12 7L12 2"/>
  <path d="M14 20L12 22L10 20"/>
  <path d="M12 17L12 22"/>
  <path d="M20 10L22 12L20 14"/>
  <path d="M17 12L22 12"/>
  <path d="M4 14L2 12L4 10"/>
  <path d="M7 12L2 12"/>
  <path d="M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"/>
</svg>
