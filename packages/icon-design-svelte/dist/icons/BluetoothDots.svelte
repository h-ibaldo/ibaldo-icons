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
  <path d="M8.5 2L8.5 22"/>
  <path d="M2 18L15 6"/>
  <path d="M2 6L15 18"/>
  <path d="M8.5 2L15 6"/>
  <path d="M15 18L8.5 22"/>
  <path d="M18.5 12L18.5 12"/>
  <path d="M15 12L15 12"/>
  <path d="M22 12L22 12"/>
</svg>
