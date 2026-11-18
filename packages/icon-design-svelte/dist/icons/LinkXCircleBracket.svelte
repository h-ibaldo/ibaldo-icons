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
  <path d="M9 12L7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2"/>
  <path d="M8 7L16 7"/>
  <path d="M21.578 9C21.848 8.387 22 7.711 22 7C22 4.238 19.762 2 17 2L15 2"/>
  <path d="M22 16.5C22 19.535 19.535 22 16.5 22C13.465 22 11 19.535 11 16.5C11 13.465 13.465 11 16.5 11C19.535 11 22 13.465 22 16.5Z"/>
  <path d="M18 15L15 18"/>
  <path d="M15 15L18 18"/>
</svg>
