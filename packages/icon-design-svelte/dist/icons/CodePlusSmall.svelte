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
  <path d="M9 12L15 12"/>
  <path d="M12 15L12 9"/>
  <path d="M18 4C19.105 4 20 4.895 20 6L20 9.172C20 9.703 20.211 10.211 20.586 10.586L22 12L20.586 13.414C20.211 13.789 20 14.297 20 14.828L20 18C20 19.105 19.105 20 18 20"/>
  <path d="M6 20C4.895 20 4 19.105 4 18L4 14.828C4 14.297 3.789 13.789 3.414 13.414L2 12L3.414 10.586C3.789 10.211 4 9.703 4 9.172L4 6C4 4.895 4.895 4 6 4"/>
</svg>
