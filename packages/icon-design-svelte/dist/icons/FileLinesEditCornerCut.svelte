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
  <path d="M21.414 21.243C22.195 20.462 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.462 22.195 21.243 21.414L21.414 21.243Z"/>
  <path d="M17 20L20 17"/>
  <path d="M18 21"/>
  <path d="M19 11L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L14 22"/>
  <path d="M7 8L14 8"/>
  <path d="M7 12L9 12"/>
  <path d="M7 16L9 16"/>
</svg>
