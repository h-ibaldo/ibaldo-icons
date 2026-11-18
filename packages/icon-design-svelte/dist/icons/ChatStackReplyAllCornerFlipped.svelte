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
  <path d="M22 14L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"/>
  <path d="M18 10L16 8L18 6"/>
  <path d="M14 10L12 8L14 6"/>
  <path d="M16 8L20 8C21.105 8 22 8.895 22 10"/>
  <path d="M9 5.199L5 2L5 6L4 6C2.895 6 2 6.895 2 8L2 12C2 13.105 2.895 14 4 14L16 14"/>
</svg>
