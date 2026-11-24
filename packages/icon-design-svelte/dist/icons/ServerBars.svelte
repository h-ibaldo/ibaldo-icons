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
  <path d="M3 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z"/>
  <path d="M10 8L10 16"/>
  <path d="M14 8L14 16"/>
  <path d="M18 8L18 16"/>
  <path d="M6 16L6 16"/>
  <path d="M6 13L6 13"/>
</svg>
