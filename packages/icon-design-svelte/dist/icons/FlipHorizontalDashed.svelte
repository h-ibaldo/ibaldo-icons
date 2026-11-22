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
  <path d="M12 22L12 20"/>
  <path d="M12 16L12 14"/>
  <path d="M12 10L12 8"/>
  <path d="M12 4L12 2"/>
  <path d="M7 16L7 8L2 12Z"/>
  <path d="M17 8L17 16L22 12Z"/>
</svg>
