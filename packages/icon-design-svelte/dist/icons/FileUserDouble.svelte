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
  <path d="M10 15C10 16.657 8.657 18 7 18C5.343 18 4 16.657 4 15C4 13.343 5.343 12 7 12C8.657 12 10 13.343 10 15Z"/>
  <path d="M12 22L12 22C12 19.791 10.209 18 8 18L6 18C3.791 18 2 19.791 2 22L2 22"/>
  <path d="M18 22C18 19.791 16.209 18 14 18"/>
  <path d="M14 17.816C15.163 17.403 16 16.304 16 15C16 13.343 14.657 12 13 12"/>
  <path d="M6 8L6 4C6 2.895 6.895 2 8 2L16.016 2C16.646 2 17.25 2.25 17.696 2.696L21.304 6.304C21.75 6.75 22 7.354 22 7.984L22 22"/>
  <path d="M16 2L16 7C16 7.552 16.448 8 17 8L22 8"/>
</svg>
