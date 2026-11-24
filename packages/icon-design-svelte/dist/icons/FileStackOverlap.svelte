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
  <path d="M15 20L15 12.828C15 12.298 14.789 11.789 14.414 11.414L10.586 7.586C10.211 7.211 9.702 7 9.172 7L4 7C2.895 7 2 7.895 2 9L2 20C2 21.105 2.895 22 4 22L13 22C14.105 22 15 21.105 15 20Z"/>
  <path d="M9 7L9 12C9 12.552 9.448 13 10 13L15 13"/>
  <path d="M18 17L20 17C21.105 17 22 16.105 22 15L22 7.828C22 7.298 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.702 2 16.172 2L11 2C9.895 2 9 2.895 9 4"/>
  <path d="M16 2L16 7C16 7.552 16.448 8 17 8L22 8"/>
</svg>
