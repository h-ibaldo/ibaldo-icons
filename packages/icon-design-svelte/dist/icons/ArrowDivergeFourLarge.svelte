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
  <path d="M9 5L12 2L15 5"/>
  <path d="M12 7L12 2"/>
  <path d="M15 19L12 22L9 19"/>
  <path d="M12 17L12 22"/>
  <path d="M19 9L22 12L19 15"/>
  <path d="M17 12L22 12"/>
  <path d="M5 15L2 12L5 9"/>
  <path d="M7 12L2 12"/>
  <path d="M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"/>
</svg>
