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
  <path d="M10 9.5C10 9.776 9.776 10 9.5 10C9.224 10 9 9.776 9 9.5C9 9.224 9.224 9 9.5 9C9.776 9 10 9.224 10 9.5Z"/>
  <path d="M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22Z"/>
  <path d="M10 14L7 18"/>
  <path d="M17 16.75L14 13L10 18"/>
</svg>
