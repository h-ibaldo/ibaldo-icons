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
  <path d="M9 12L18 12"/>
  <path d="M9 8L18 8"/>
  <path d="M9 16L15 16"/>
  <path d="M20 20C21.105 20 22 19.105 22 18L22 6C22 4.895 21.105 4 20 4L7 4C5.895 4 5 4.895 5 6L5 16L2 20Z"/>
</svg>
