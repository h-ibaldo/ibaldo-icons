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
  <path d="M12 2L12 9"/>
  <path d="M12 15L12 22"/>
  <path d="M22 12L15 12"/>
  <path d="M9 12L2 12"/>
  <path d="M12 9L15 12L12 15L9 12Z"/>
  <path d="M16 5L19 5L19 8"/>
  <path d="M8 19L5 19L5 16"/>
  <path d="M5 8L5 5L8 5"/>
  <path d="M19 16L19 19L16 19"/>
</svg>
