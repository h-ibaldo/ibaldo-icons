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
  <path d="M10 22L14 22"/>
  <path d="M22 6.5L22 5C22 3.344 20.656 2 19 2L18 2"/>
  <path d="M2 10.5L2 14.5"/>
  <path d="M6 2L5 2C3.344 2 2 3.344 2 5L2 6.5"/>
  <path d="M18 22L19 22C20.656 22 22 20.656 22 19L22 18.5"/>
  <path d="M2 18.5L2 19C2 20.656 3.344 22 5 22L6 22"/>
  <path d="M14 2L10 2"/>
  <path d="M22 14.5L22 10.5"/>
  <path d="M8 18L16 18C17.105 18 18 17.105 18 16L18 8C18 6.895 17.105 6 16 6L8 6C6.895 6 6 6.895 6 8L6 16C6 17.105 6.895 18 8 18Z"/>
  <path d="M18 11C14.133 11 11 14.133 11 18"/>
  <path d="M10 10L10 10"/>
</svg>
