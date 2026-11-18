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
  <path d="M9 2L5 2C3.344 2 2 3.344 2 5L2 13"/>
  <path d="M14 22L17 18L19 18C20.656 18 22 16.656 22 15"/>
  <path d="M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z"/>
  <path d="M17 9L17 6L16 6"/>
  <path d="M7 6.785C6.391 7.332 6 8.117 6 9L6 15C6 16.656 7.344 18 9 18L11 18"/>
</svg>
