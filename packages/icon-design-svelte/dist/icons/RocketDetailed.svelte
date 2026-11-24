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
  <path d="M22 2L16.961 2.629C15.051 2.867 13.293 3.785 12.004 5.215L5 13L11 19L18.785 11.996C20.215 10.707 21.133 8.949 21.371 7.039Z"/>
  <path d="M6 14L3 17L7 21L10 18"/>
  <path d="M11 19L13 22L18 18L17 14"/>
  <path d="M5 13L2 11L6 6L10 7"/>
  <path d="M3 21L2 22"/>
  <path d="M12 10C12 8.895 12.895 8 14 8C15.105 8 16 8.895 16 10C16 11.105 15.105 12 14 12C12.895 12 12 11.105 12 10Z"/>
  <path d="M20.848 9.043L14.555 3.324"/>
</svg>
