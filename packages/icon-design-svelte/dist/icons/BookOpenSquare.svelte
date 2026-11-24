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
  <path d="M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"/>
  <path d="M12 9L12 18"/>
  <path d="M12 9C11.387 7.773 10.133 7 8.766 7L6 7L6 16L8.766 16C10.133 16 11.387 16.773 12 18"/>
  <path d="M12 9C12.613 7.773 13.867 7 15.234 7L18 7L18 16L15.234 16C13.867 16 12.613 16.773 12 18"/>
</svg>
