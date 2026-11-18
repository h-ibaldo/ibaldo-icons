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
  <path d="M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13"/>
  <path d="M13 18L10.449 20.551C8.516 22.484 5.383 22.484 3.449 20.551C1.516 18.617 1.516 15.484 3.449 13.551L6 11"/>
  <path d="M4 9L2 9"/>
  <path d="M5.465 5.465L4.051 4.051"/>
  <path d="M9 4L9 2"/>
  <path d="M20 15L22 15"/>
  <path d="M18.535 18.535L19.949 19.949"/>
  <path d="M15 20L15 22"/>
</svg>
