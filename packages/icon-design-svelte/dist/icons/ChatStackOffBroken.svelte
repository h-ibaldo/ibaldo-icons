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
  <path d="M16 2L5 2C3.344 2 2 3.344 2 5L2 13"/>
  <path d="M22 2L4 21"/>
  <path d="M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 8.762 21.965 8.535 21.914 8.313"/>
  <path d="M18.211 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.035 6.527 16.949 7.328 17.488"/>
</svg>
