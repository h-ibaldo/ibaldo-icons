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
  <path d="M3 13L21 13L21 21C21 21.551 20.551 22 20 22L4 22C3.449 22 3 21.551 3 21Z"/>
  <path d="M3 13L21 13C21.551 13 22 12.551 22 12L22 9C22 8.449 21.551 8 21 8L3 8C2.449 8 2 8.449 2 9L2 12C2 12.551 2.449 13 3 13Z"/>
  <path d="M12 8L12 22"/>
  <path d="M9 2C10.656 2 12 3.344 12 5L12 8L9 8C7.344 8 6 6.656 6 5C6 3.344 7.344 2 9 2Z"/>
  <path d="M15 2C13.344 2 12 3.344 12 5L12 8L15 8C16.656 8 18 6.656 18 5C18 3.344 16.656 2 15 2Z"/>
</svg>
