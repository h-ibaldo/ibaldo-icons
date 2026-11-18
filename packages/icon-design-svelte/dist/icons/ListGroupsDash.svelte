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
  <path d="M9 4L21 4"/>
  <path d="M9 20L21 20"/>
  <path d="M3 4L4 4"/>
  <path d="M9 8L21 8"/>
  <path d="M3 8L4 8"/>
  <path d="M9 16L21 16"/>
  <path d="M3 16L4 16"/>
  <path d="M3 20L4 20"/>
</svg>
