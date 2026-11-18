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
  <path d="M8 2L8 4"/>
  <path d="M16 2L16 4"/>
  <path d="M22 20L22 5C22 3.895 21.105 3 20 3L4 3C2.895 3 2 3.895 2 5L2 20C2 21.105 2.895 22 4 22L20 22C21.105 22 22 21.105 22 20Z"/>
  <path d="M6 8L6 8"/>
  <path d="M16 18L16 18"/>
  <path d="M10 8L14 8C15.105 8 16 8.895 16 10L16 14"/>
  <path d="M14 12L16 14L18 12"/>
</svg>
