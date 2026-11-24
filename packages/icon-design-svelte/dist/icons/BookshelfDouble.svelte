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
  <path d="M4 2L4 22"/>
  <path d="M20 2L20 22"/>
  <path d="M4 4L20 4"/>
  <path d="M4 12L20 12"/>
  <path d="M4 20L20 20"/>
  <path d="M8 7L8 12"/>
  <path d="M12 7L12 12"/>
  <path d="M8 15L8 20"/>
  <path d="M12 15L12 20"/>
  <path d="M16 15L16 20"/>
  <path d="M15 7L17 12"/>
</svg>
