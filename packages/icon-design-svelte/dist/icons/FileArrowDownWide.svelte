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
  <path d="M22 20L22 7.828C22 7.297 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.703 2 16.172 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"/>
  <path d="M16 2L16 7C16 7.551 16.449 8 17 8L22 8"/>
  <path d="M12 9L12 16"/>
  <path d="M15 13L12 16L9 13"/>
</svg>
