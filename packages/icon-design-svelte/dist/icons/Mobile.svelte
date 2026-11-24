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
  <path d="M16 22L8 22C6.895 22 6 21.105 6 20L6 4C6 2.895 6.895 2 8 2L16 2C17.105 2 18 2.895 18 4L18 20C18 21.105 17.105 22 16 22Z"/>
  <path d="M6 18L18 18"/>
  <path d="M6 6L18 6"/>
</svg>
