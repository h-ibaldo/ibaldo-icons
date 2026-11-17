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
  <path d="M17 16C17 18.762 14.762 21 12 21C9.238 21 7 18.762 7 16C7 13.238 9.238 11 12 11C14.762 11 17 13.238 17 16Z"/>
  <path d="M12 9L4 6L4 2L20 2L20 6Z"/>
</svg>
