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
  <path d="M8 6L8 7"/>
  <path d="M12 6L12 7"/>
  <path d="M6 9.922C7.18 10.605 8.539 11 10 11C11.461 11 12.82 10.605 14 9.922"/>
  <path d="M2 4L2 13C2 14.105 2.895 15 4 15L5 15L5 18L10 15L16 15C17.105 15 18 14.105 18 13L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"/>
  <path d="M22 8L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L12 19"/>
</svg>
