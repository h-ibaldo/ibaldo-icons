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
  <path d="M4 9L2 9"/>
  <path d="M5.465 5.465L4.051 4.051"/>
  <path d="M9 4L9 2"/>
  <path d="M20 15L22 15"/>
  <path d="M18.535 18.535L19.949 19.949"/>
  <path d="M15 20L15 22"/>
  <path d="M8 16L16 8"/>
  <path d="M13 17L11.004 19.02C9.344 20.676 6.656 20.676 4.996 19.02C3.34 17.359 3.34 14.676 4.992 13.02L7 10.98"/>
  <path d="M11 7L12.996 4.98C14.656 3.324 17.344 3.324 19.004 4.98C20.66 6.641 20.66 9.324 19.008 10.98L17 13.02"/>
</svg>
