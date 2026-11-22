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
  <path d="M12 22L6.5 11.691C5.035 8.941 5.656 5.551 8 3.5C10.289 1.496 13.711 1.496 16 3.5C18.344 5.551 18.965 8.941 17.5 11.691Z"/>
  <path d="M10 8C10 6.895 10.895 6 12 6C13.105 6 14 6.895 14 8C14 9.105 13.105 10 12 10C10.895 10 10 9.105 10 8Z"/>
</svg>
