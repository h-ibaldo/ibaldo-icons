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
  <path d="M8 8C8 6.895 8.895 6 10 6C11.105 6 12 6.895 12 8C12 9.105 11.105 10 10 10C8.895 10 8 9.105 8 8Z"/>
  <path d="M16 19L18 21L21 17"/>
  <path d="M10 22.004L4.5 11.691C3.035 8.945 3.656 5.551 6 3.504C8.289 1.5 11.711 1.5 14 3.504C16.344 5.551 16.965 8.945 15.5 11.691Z"/>
</svg>
