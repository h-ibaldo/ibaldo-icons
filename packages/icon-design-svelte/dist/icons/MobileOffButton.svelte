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
  <path d="M13 19L11 19"/>
  <path d="M22 2L2 22"/>
  <path d="M6 13L6 4C6 2.895 6.895 2 8 2L16 2C16.293 2 16.574 2.063 16.824 2.176"/>
  <path d="M18 6L18 20C18 21.105 17.105 22 16 22L8 22C6.895 22 6 21.105 6 20L6 18"/>
</svg>
