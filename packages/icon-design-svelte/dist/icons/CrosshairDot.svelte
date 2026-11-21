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
  <path d="M3 12C3 7.031 7.031 3 12 3C16.969 3 21 7.031 21 12C21 16.969 16.969 21 12 21C7.031 21 3 16.969 3 12Z"/>
  <path d="M11 12C11 11.449 11.449 11 12 11C12.551 11 13 11.449 13 12C13 12.551 12.551 13 12 13C11.449 13 11 12.551 11 12Z"/>
  <path d="M12 2L12 6"/>
  <path d="M12 18L12 22"/>
  <path d="M22 12L18 12"/>
  <path d="M6 12L2 12"/>
</svg>
