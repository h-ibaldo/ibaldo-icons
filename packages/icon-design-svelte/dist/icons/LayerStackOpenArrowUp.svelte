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
  <path d="M12 12L2 7L12 2L22 7Z"/>
  <path d="M7 9.5L2 12L12 17"/>
  <path d="M22 12L17 9.5"/>
  <path d="M7 14.5L2 17L12 22"/>
  <path d="M16 18L19 15L22 18"/>
  <path d="M19 15L19 22"/>
</svg>
