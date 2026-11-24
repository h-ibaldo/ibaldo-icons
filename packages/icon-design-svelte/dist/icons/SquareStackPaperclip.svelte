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
  <path d="M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 12"/>
  <path d="M2 17L2 4C2 2.895 2.895 2 4 2L14 2"/>
  <path d="M19 22L14 22C12.344 22 11 20.656 11 19C11 17.344 12.344 16 14 16L20.5 16C21.328 16 22 16.672 22 17.5C22 18.328 21.328 19 20.5 19L16 19"/>
</svg>
