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
  <path d="M20 12L20 4C20 2.895 19.105 2 18 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L8 22"/>
  <path d="M19 22L14 22C12.343 22 11 20.657 11 19L11 19C11 17.343 12.343 16 14 16L20.5 16C21.328 16 22 16.672 22 17.5L22 17.5C22 18.328 21.328 19 20.5 19L16 19"/>
</svg>
