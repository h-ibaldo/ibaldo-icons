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
  <path d="M22 22L14 22L14 17L22 17Z"/>
  <path d="M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17"/>
  <path d="M10 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 9"/>
  <path d="M2 8L22 8"/>
  <path d="M5 5L5 5"/>
  <path d="M8 5L8 5"/>
  <path d="M11 5L11 5"/>
</svg>
