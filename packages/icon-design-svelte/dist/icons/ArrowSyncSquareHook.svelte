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
  <path d="M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z"/>
  <path d="M10 12L8 14L6 12"/>
  <path d="M13 7L11 7C9.344 7 8 8.344 8 10L8 14"/>
  <path d="M14 12L16 10L18 12"/>
  <path d="M11 17L13 17C14.656 17 16 15.656 16 14L16 10"/>
</svg>
