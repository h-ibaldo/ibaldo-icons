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
  <path d="M13 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 14"/>
  <path d="M16 7L12 7"/>
  <path d="M16 12L12 12"/>
  <path d="M13 17L12 17"/>
  <path d="M6 7L7 8L9 6"/>
  <path d="M6 12L7 13L9 11"/>
  <path d="M6 17L7 18L9 16"/>
  <path d="M22 19L16 19"/>
</svg>
