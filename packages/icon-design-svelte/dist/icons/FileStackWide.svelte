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
  <path d="M7 7L7 4C7 2.895 7.895 2 9 2L17 2L22 7L22 15C22 16.105 21.105 17 20 17L17 17"/>
  <path d="M17 12L17 20C17 21.105 16.105 22 15 22L4 22C2.895 22 2 21.105 2 20L2 9C2 7.895 2.895 7 4 7L12 7Z"/>
  <path d="M22 8L18 8C16.895 8 16 7.105 16 6L16 2"/>
  <path d="M17 13L13 13C11.895 13 11 12.105 11 11L11 7"/>
</svg>
