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
  <path d="M4 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 9"/>
  <path d="M3.109 3L11.383 9.512C11.746 9.801 12.258 9.801 12.617 9.512L20.887 3"/>
  <path d="M17 22L12.5 22C10.016 22 8 19.984 8 17.5C8 15.016 10.016 13 12.5 13L19 13C20.656 13 22 14.344 22 16C22 17.656 20.656 19 19 19L14.5 19C13.672 19 13 18.328 13 17.5C13 16.672 13.672 16 14.5 16L18 16"/>
</svg>
