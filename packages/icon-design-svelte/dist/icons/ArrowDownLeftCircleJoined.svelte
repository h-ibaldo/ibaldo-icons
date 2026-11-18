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
  <path d="M14 15L9 15L9 10"/>
  <path d="M14.438 2.313C12.453 1.812 10.266 1.836 7.918 2.949C4.602 4.52 2.234 7.727 2.02 11.391C1.652 17.582 6.918 22.645 13.172 21.934C17.805 21.406 21.531 17.586 21.957 12.941C22.102 11.367 21.879 9.859 21.367 8.492C20.617 6.492 17.988 6.012 16.477 7.523L9 15"/>
</svg>
