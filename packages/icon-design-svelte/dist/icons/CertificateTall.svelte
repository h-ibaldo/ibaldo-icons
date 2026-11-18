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
  <path d="M14 14C14 15.656 12.656 17 11 17C9.344 17 8 15.656 8 14C8 12.344 9.344 11 11 11C12.656 11 14 12.344 14 14Z"/>
  <path d="M6 20L5 20C4.449 20 4 19.551 4 19L4 3C4 2.449 4.449 2 5 2L19 2C19.551 2 20 2.449 20 3L20 19C20 19.551 19.551 20 19 20L16 20"/>
  <path d="M8 6L16 6"/>
  <path d="M9 16.223L9 22L11 21L13 22L13 16.223"/>
</svg>
