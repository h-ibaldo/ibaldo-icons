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
  <path d="M13 7L11 13"/>
  <path d="M16 8L18 10L16 12"/>
  <path d="M8 8L6 10L8 12"/>
  <path d="M20 17L4 17C2.895 17 2 16.105 2 15L2 5C2 3.895 2.895 3 4 3L20 3C21.105 3 22 3.895 22 5L22 15C22 16.105 21.105 17 20 17Z"/>
  <path d="M5 21L19 21"/>
  <path d="M12 17L12 21"/>
</svg>
