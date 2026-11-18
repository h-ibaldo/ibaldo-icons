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
  <path d="M5 21L10 16L12 18L16 14L20 18"/>
  <path d="M10 11.5C10 11.776 9.776 12 9.5 12C9.224 12 9 11.776 9 11.5C9 11.224 9.224 11 9.5 11C9.776 11 10 11.224 10 11.5Z"/>
  <path d="M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22Z"/>
  <path d="M14 2L14 7C14 7.552 14.448 8 15 8L20 8"/>
</svg>
