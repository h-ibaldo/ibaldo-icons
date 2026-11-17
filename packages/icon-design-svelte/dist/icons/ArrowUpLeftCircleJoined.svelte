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
  <path d="M14 9L9 9L9 14"/>
  <path d="M14.438 21.688C12.453 22.188 10.266 22.164 7.918 21.051C4.602 19.48 2.234 16.273 2.02 12.609C1.652 6.418 6.918 1.355 13.172 2.066C17.805 2.594 21.531 6.414 21.957 11.059C22.102 12.633 21.879 14.141 21.367 15.508C20.617 17.508 17.988 17.988 16.477 16.477L9 9"/>
</svg>
