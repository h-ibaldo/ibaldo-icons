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
  <path d="M2 22L2 22"/>
  <path d="M7 22L7 22"/>
  <path d="M12 2L12 22"/>
  <path d="M17 22L17 22"/>
  <path d="M2 2L2 2"/>
  <path d="M2 7L2 7"/>
  <path d="M2 12L2 12"/>
  <path d="M2 17L2 17"/>
  <path d="M22 22L22 22"/>
  <path d="M22 2L22 2"/>
  <path d="M22 7L22 7"/>
  <path d="M22 12L22 12"/>
  <path d="M22 17L22 17"/>
  <path d="M7 2L7 2"/>
  <path d="M17 2L17 2"/>
  <path d="M7 12L7 12"/>
  <path d="M17 12L17 12"/>
</svg>
