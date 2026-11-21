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
  <path d="M17 13L21 13C21.551 13 22 13.449 22 14L22 16C22 16.551 21.551 17 21 17L17 17C15.895 17 15 16.105 15 15C15 13.895 15.895 13 17 13Z"/>
  <path d="M21 17L21 20C21 21.105 20.105 22 19 22L4 22C2.895 22 2 21.105 2 20L2 10C2 8.895 2.895 8 4 8L19 8C20.105 8 21 8.895 21 10L21 13.016"/>
  <path d="M4 8L16.664 3.477C17.316 3.246 18 3.727 18 4.418L18 8"/>
</svg>
