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
  <path d="M7 4.5L17 9.5"/>
  <path d="M2 7L12 12L22 7"/>
  <path d="M12 22L12 12"/>
  <path d="M15 20.5L12 22L2 17L2 7L12 2L22 7L22 12"/>
  <path d="M16 17L22 17"/>
</svg>
