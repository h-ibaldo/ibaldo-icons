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
  <path d="M3 8L14 8C14.551 8 15 8.449 15 9L15 13C15 15.762 12.762 18 10 18L7 18C4.238 18 2 15.762 2 13L2 9C2 8.449 2.449 8 3 8Z"/>
  <path d="M4 8L4 3.5C4 2.672 4.672 2 5.5 2C6.328 2 7 2.672 7 3.5L7 8"/>
  <path d="M10 8L10 3.5C10 2.672 10.672 2 11.5 2C12.328 2 13 2.672 13 3.5L13 8"/>
  <path d="M7 18L7 22"/>
  <path d="M10 18L10 22"/>
  <path d="M22 2L18 6L22 6L18 11"/>
</svg>
