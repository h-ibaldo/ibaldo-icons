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
  <path d="M3 15L2.707 14.121C2.254 12.762 2.359 11.281 3 10L11 2L22 4L14 12L3 10"/>
  <path d="M22 9L14 17L3 15"/>
  <path d="M22 14L14 22L3 20L2.707 19.121C2.254 17.762 2.359 16.281 3 15"/>
</svg>
