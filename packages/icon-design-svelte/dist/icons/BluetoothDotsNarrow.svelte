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
  <path d="M8 2L13 7L8 12L3 7"/>
  <path d="M3 17L8 12L13 17L8 22"/>
  <path d="M8 2L8 22"/>
  <path d="M18 12L18 12"/>
  <path d="M14 12L14 12"/>
  <path d="M22 12L22 12"/>
</svg>
