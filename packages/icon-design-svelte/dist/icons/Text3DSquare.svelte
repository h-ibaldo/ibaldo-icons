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
  <path d="M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"/>
  <path d="M15 17L14 17L14 7L15 7C16.656 7 18 8.344 18 10L18 14C18 15.656 16.656 17 15 17Z"/>
  <path d="M6 9C6 7.895 6.895 7 8 7C9.105 7 10 7.895 10 9L10 10C10 11.105 9.105 12 8 12"/>
  <path d="M6 15C6 16.105 6.895 17 8 17C9.105 17 10 16.105 10 15L10 14C10 12.895 9.105 12 8 12"/>
</svg>
