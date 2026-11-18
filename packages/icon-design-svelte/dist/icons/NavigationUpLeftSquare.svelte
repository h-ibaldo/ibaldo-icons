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
  <path d="M16.449 9.93L9.375 8.16C8.641 7.98 7.977 8.641 8.16 9.375L9.93 16.449C10.156 17.352 11.379 17.484 11.797 16.652L13.266 13.711C13.363 13.52 13.52 13.363 13.711 13.266L16.652 11.793C17.484 11.379 17.348 10.156 16.449 9.93Z"/>
  <path d="M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"/>
</svg>
