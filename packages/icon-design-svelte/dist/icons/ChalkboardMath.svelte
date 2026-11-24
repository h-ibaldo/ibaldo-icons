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
  <path d="M3 19L3 5L21 5L21 19"/>
  <path d="M22 19L2 19"/>
  <path d="M10 12L14 12"/>
  <path d="M12 10L12 14"/>
  <path d="M17 14L17 10"/>
  <path d="M7 14L7 10"/>
</svg>
