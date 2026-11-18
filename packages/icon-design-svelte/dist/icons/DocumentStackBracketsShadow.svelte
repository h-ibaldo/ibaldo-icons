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
  <path d="M20 12L20 8C20 6.895 19.105 6 18 6L8 6C6.895 6 6 6.895 6 8L6 20C6 21.105 6.895 22 8 22"/>
  <path d="M2 17L2 4C2 2.895 2.895 2 4 2L14 2"/>
  <path d="M14 16L11 19L14 22"/>
  <path d="M19 16L22 19L19 22"/>
</svg>
