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
  <path d="M4 22C2.895 22 2 21.105 2 20"/>
  <path d="M2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4"/>
  <path d="M22 20C22 21.105 21.105 22 20 22"/>
  <path d="M16 22L14 22"/>
  <path d="M10 22L8 22"/>
  <path d="M2 16L2 14"/>
  <path d="M2 10L2 8"/>
  <path d="M22 16L22 14"/>
  <path d="M22 10L22 8"/>
</svg>
