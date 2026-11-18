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
  <path d="M12 15L8 15C7.449 15 7 14.551 7 14L7 10C7 9.449 7.449 9 8 9L12 9C12.551 9 13 9.449 13 10L13 14C13 14.551 12.551 15 12 15Z"/>
  <path d="M13 11L16 9L17 9L17 15L16 15L13 13"/>
  <path d="M12 2C6.383 2 1.848 6.633 2.004 12.285C2.148 17.504 6.496 21.852 11.715 21.996C17.367 22.152 22 17.617 22 12L22 4C22 2.895 21.105 2 20 2Z"/>
</svg>
