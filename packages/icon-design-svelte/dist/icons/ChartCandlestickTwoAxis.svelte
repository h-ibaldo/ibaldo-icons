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
  <path d="M2 2L2 22L22.023 22"/>
  <path d="M7 6L11 6L11 14L7 14Z"/>
  <path d="M15 10L19 10L19 15L15 15Z"/>
  <path d="M17 7L17 10"/>
  <path d="M9 3L9 6"/>
  <path d="M9 14L9 17"/>
  <path d="M17 15L17 18"/>
</svg>
