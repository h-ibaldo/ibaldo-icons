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
  <path d="M12 2L12 22"/>
  <path d="M17 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L17 16C16.449 16 16 15.551 16 15L16 9C16 8.449 16.449 8 17 8Z"/>
  <path d="M3 6L7 6C7.551 6 8 6.449 8 7L8 17C8 17.551 7.551 18 7 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6Z"/>
</svg>
