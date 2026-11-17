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
  <path d="M17 5L17 3.867C17 3.07 16.109 2.594 15.445 3.035L8 8L4 8C3.449 8 3 8.445 3 9L3 15C3 15.555 3.449 16 4 16L8 16L15.445 20.965C16.109 21.406 17 20.93 17 20.133L17 19"/>
  <path d="M21 9L15 15.25"/>
  <path d="M15 9L21 15.25"/>
</svg>
