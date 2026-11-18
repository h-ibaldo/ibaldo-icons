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
  <path d="M14 2L2 2L2 22L14 22Z"/>
  <path d="M14 22L22 22L22 7L14 7"/>
  <path d="M6 7L6 7"/>
  <path d="M10 7L10 7"/>
  <path d="M6 12L6 12"/>
  <path d="M10 12L10 12"/>
  <path d="M6 17L6 17"/>
  <path d="M10 17L10 17"/>
  <path d="M18 12L18 12"/>
  <path d="M18 17L18 17"/>
</svg>
