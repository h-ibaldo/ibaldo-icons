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
  <path d="M3 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L3 16C2.449 16 2 15.551 2 15L2 9C2 8.449 2.449 8 3 8Z"/>
  <path d="M6 11L6 8"/>
  <path d="M10 11L10 8"/>
  <path d="M14 11L14 8"/>
  <path d="M18 11L18 8"/>
</svg>
