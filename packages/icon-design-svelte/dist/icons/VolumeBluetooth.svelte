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
  <path d="M19 10L19 22"/>
  <path d="M16 13L19 16L22 13L19 10"/>
  <path d="M19 22L22 19L19 16L16 19"/>
  <path d="M12 16L12 3C12 2.203 11.109 1.727 10.445 2.168L6 6L3 6C2.449 6 2 6.449 2 7L2 11.867C2 12.418 2.449 12.867 3 12.867L6 12.867L10.445 16.832C11.109 17.273 12 16.797 12 16Z"/>
</svg>
