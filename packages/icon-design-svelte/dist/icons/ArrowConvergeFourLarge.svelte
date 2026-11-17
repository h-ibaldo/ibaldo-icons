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
  <path d="M15 4L12 7L9 4"/>
  <path d="M12 2L12 7"/>
  <path d="M9 20L12 17L15 20"/>
  <path d="M12 22L12 17"/>
  <path d="M4 9L7 12L4 15"/>
  <path d="M2 12L7 12"/>
  <path d="M20 15L17 12L20 9"/>
  <path d="M22 12L17 12"/>
  <path d="M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"/>
</svg>
