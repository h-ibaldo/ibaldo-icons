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
  <path d="M15 9L15 16C15 19.313 12.313 22 9 22C5.688 22 3 19.313 3 16L3 6C3 3.789 4.789 2 7 2C9.211 2 11 3.789 11 6L11 15C11 16.105 10.105 17 9 17C7.895 17 7 16.105 7 15L7 9"/>
  <path d="M16 4L18 6L22 2"/>
</svg>
