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
  <path d="M3.332 4L20.668 20"/>
  <path d="M15.332 8.922C16.5 7.848 18.5 6 18.5 6L12 2L12 5.848"/>
  <path d="M18.5 18L12 22"/>
  <path d="M12 12L12 22"/>
  <path d="M5.5 18L12 12"/>
</svg>
