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
  <path d="M20 22C20 21.448 20.448 21 21 21"/>
  <path d="M16 22C16 19.239 18.239 17 21 17"/>
  <path d="M12 22C12 17.029 16.029 13 21 13"/>
  <path d="M9 18L5 18C3.895 18 3 17.105 3 16L3 8.243C3 7.447 3.316 6.684 3.879 6.121L7.121 2.879C7.684 2.316 8.447 2 9.243 2L14 2C15.105 2 16 2.895 16 4L16 11"/>
  <path d="M9 2L9 7C9 7.552 8.552 8 8 8L3 8"/>
</svg>
