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
  <path d="M12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 14"/>
  <path d="M7 7L7 7"/>
  <path d="M17 7L11 7"/>
  <path d="M7 12L7 12"/>
  <path d="M17 12L11 12"/>
  <path d="M7 17L7 17"/>
  <path d="M12 17L11 17"/>
  <path d="M18 16L18 22"/>
  <path d="M21 19L15 19"/>
</svg>
