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
  <path d="M16 18L8 18C6.895 18 6 17.105 6 16L6 8C6 6.895 6.895 6 8 6L16 6C17.105 6 18 6.895 18 8L18 16C18 17.105 17.105 18 16 18Z"/>
  <path d="M6 10L18 10"/>
  <path d="M2 7L2 5C2 3.344 3.344 2 5 2L7 2"/>
  <path d="M22 7L22 5C22 3.344 20.656 2 19 2L17 2"/>
  <path d="M2 17L2 19C2 20.656 3.344 22 5 22L7 22"/>
  <path d="M22 17L22 19C22 20.656 20.656 22 19 22L17 22"/>
</svg>
