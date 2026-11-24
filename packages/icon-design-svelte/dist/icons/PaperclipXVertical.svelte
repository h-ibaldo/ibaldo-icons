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
  <path d="M14 9L14 16C14 19.313 11.313 22 8 22C4.688 22 2 19.313 2 16L2 6C2 3.789 3.789 2 6 2C8.211 2 10 3.789 10 6L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9"/>
  <path d="M18 6L22 2"/>
  <path d="M18 2L22 6"/>
</svg>
