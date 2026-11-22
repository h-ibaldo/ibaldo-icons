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
  <path d="M14 2L14 8L10 8L10 2Z"/>
  <path d="M20 16L20 22L16 22L16 16Z"/>
  <path d="M8 16L8 22L4 22L4 16Z"/>
  <path d="M12 11L12 8"/>
  <path d="M18 16L18 13.723C18 13.289 17.723 12.906 17.316 12.773L12 11"/>
  <path d="M6 16L6 13.723C6 13.289 6.277 12.906 6.684 12.773L12 11"/>
</svg>
