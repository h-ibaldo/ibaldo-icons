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
  <path d="M2 12L22 12"/>
  <path d="M8 7L8 3C8 2.449 8.449 2 9 2L15 2C15.551 2 16 2.449 16 3L16 7C16 7.551 15.551 8 15 8L9 8C8.449 8 8 7.551 8 7Z"/>
  <path d="M6 21L6 17C6 16.449 6.449 16 7 16L17 16C17.551 16 18 16.449 18 17L18 21C18 21.551 17.551 22 17 22L7 22C6.449 22 6 21.551 6 21Z"/>
</svg>
