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
  <path d="M12 2L12 22"/>
  <path d="M5.5 18L18.5 6"/>
  <path d="M5.5 6L18.5 18"/>
  <path d="M12 2L18.5 6"/>
  <path d="M18.5 18L12 22"/>
  <path d="M19.5 11.293L18.793 12L19.5 12.707L20.207 12Z"/>
  <path d="M4.5 11.293L3.793 12L4.5 12.707L5.207 12Z"/>
</svg>
