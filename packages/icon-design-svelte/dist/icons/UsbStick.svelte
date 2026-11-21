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
  <path d="M15 7L22 7L22 17L15 17"/>
  <path d="M19 10L18 10"/>
  <path d="M19 14L18 14"/>
  <path d="M7 6L15 6L15 18L7 18C4.238 18 2 15.762 2 13L2 11C2 8.238 4.238 6 7 6Z"/>
  <path d="M19 10L18 10"/>
  <path d="M19 14L18 14"/>
</svg>
