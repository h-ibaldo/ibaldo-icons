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
  <path d="M8 5L8 7"/>
  <path d="M18 5L7 5"/>
  <path d="M16 2L9 2"/>
  <path d="M10 22L17 22L17 5"/>
  <path d="M22 10L17 10"/>
  <path d="M17 22L21 22L21 10"/>
  <path d="M3 13L3 22L10 22L10 13"/>
  <path d="M11 13L2 13"/>
  <path d="M10 10L3 10"/>
</svg>
