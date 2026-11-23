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
  <path d="M2 4C2 2.895 2.895 2 4 2L14 2C15.105 2 16 2.895 16 4L16 8L10 8C8.895 8 8 8.895 8 10L8 16L4 16C2.895 16 2 15.105 2 14Z"/>
  <path d="M10 22C8.895 22 8 21.105 8 20"/>
  <path d="M20 8C21.105 8 22 8.895 22 10"/>
  <path d="M22 20C22 21.105 21.105 22 20 22"/>
  <path d="M16 22L14 22"/>
  <path d="M22 16L22 14"/>
</svg>
