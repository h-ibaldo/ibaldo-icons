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
  <path d="M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z"/>
  <path d="M12 2L12 9"/>
  <path d="M12 15L12 22"/>
  <path d="M22 12L15 12"/>
  <path d="M9 12L2 12"/>
</svg>
