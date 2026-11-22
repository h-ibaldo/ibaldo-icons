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
  <path d="M2 2L2 22L22.023 22"/>
  <path d="M15 5L15 9L6 9L6 5Z"/>
  <path d="M19 13L19 17L6 17L6 13Z"/>
  <path d="M11 5L11 9"/>
  <path d="M15 13L15 17"/>
</svg>
