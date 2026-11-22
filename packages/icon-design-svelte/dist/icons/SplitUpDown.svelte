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
  <path d="M22 2L22 6C22 7.105 21.105 8 20 8L4 8C2.895 8 2 7.105 2 6L2 2"/>
  <path d="M2 22L2 18C2 16.895 2.895 16 4 16L20 16C21.105 16 22 16.895 22 18L22 22"/>
  <path d="M22 12L20 12"/>
  <path d="M16 12L14 12"/>
  <path d="M10 12L8 12"/>
  <path d="M4 12L2 12"/>
</svg>
