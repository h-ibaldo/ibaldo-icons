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
  <path d="M2 3L5 3L5 20.035"/>
  <path d="M5 6L2 6L2 10L5 10"/>
  <path d="M5 18L22 18L22 5L5 5"/>
  <path d="M5 13L2 13L2 17L5 17"/>
  <path d="M8 18L8 21L11 21L11 18"/>
  <path d="M14 18L14 21L20 21L20 18"/>
  <path d="M14 18L14 21"/>
</svg>
