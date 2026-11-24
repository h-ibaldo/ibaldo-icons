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
  <path d="M12 2C7.027 2 3 6.027 3 11L3 21C3 21.555 3.449 22 4 22L20 22C20.551 22 21 21.555 21 21L21 11C21 6.027 16.973 2 12 2Z"/>
  <path d="M17 11C17 8.238 14.762 6 12 6C9.238 6 7 8.238 7 11C7 13.762 9.238 16 12 16C14.762 16 17 13.762 17 11Z"/>
  <path d="M12 9L12 11L14 11"/>
</svg>
