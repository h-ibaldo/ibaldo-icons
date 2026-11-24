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
  <path d="M11 10L12 10L12 14"/>
  <path d="M5 21L3 19L5 17"/>
  <path d="M21 5L12 5C7.027 5 3 9.027 3 14"/>
  <path d="M19 3L21 5L19 7"/>
  <path d="M3 19L12 19C16.973 19 21 14.973 21 10"/>
</svg>
