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
  <path d="M22 12L22 16C22 17.105 21.105 18 20 18L4 18C2.895 18 2 17.105 2 16L2 6.949C2 5.848 2.895 4.949 4 4.949L6 4.949"/>
  <path d="M6 22L18 22"/>
  <path d="M12 18L12 22"/>
  <path d="M10 5.5C10 7.434 11.566 9 13.5 9L14 9L14 12L18 9L18.5 9C20.434 9 22 7.434 22 5.5C22 3.566 20.434 2 18.5 2L13.5 2C11.566 2 10 3.566 10 5.5Z"/>
</svg>
