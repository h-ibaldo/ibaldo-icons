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
  <path d="M21 12C21 14.762 18.762 17 16 17C13.238 17 11 14.762 11 12C11 9.238 13.238 7 16 7C18.762 7 21 9.238 21 12Z"/>
  <path d="M16 10L16 12L18 12"/>
  <path d="M16 17C16 19.762 13.762 22 11 22C8.238 22 6 19.762 6 17L6 7C6 4.238 8.238 2 11 2C13.762 2 16 4.238 16 7"/>
  <path d="M4 7L16 7"/>
  <path d="M4 17L16 17"/>
</svg>
