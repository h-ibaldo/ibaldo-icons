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
  <path d="M11 15C11 16.657 9.657 18 8 18C6.343 18 5 16.657 5 15C5 13.343 6.343 12 8 12C9.657 12 11 13.343 11 15Z"/>
  <path d="M13 22L13 22C13 19.791 11.209 18 9 18L7 18C4.791 18 3 19.791 3 22L3 22"/>
  <path d="M5 9L5 4C5 2.895 5.895 2 7 2L15.172 2C15.702 2 16.211 2.211 16.586 2.586L20.414 6.414C20.789 6.789 21 7.298 21 7.828L21 20C21 21.105 20.105 22 19 22L17 22"/>
</svg>
