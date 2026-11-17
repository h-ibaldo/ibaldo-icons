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
  <path d="M9 22L7 22C4.238 22 2 19.762 2 17C2 14.238 4.238 12 7 12L9 12"/>
  <path d="M15 12L17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22L15 22"/>
  <path d="M8 17L16 17"/>
  <path d="M2 2L9 2"/>
  <path d="M2 5L9 5"/>
  <path d="M2 8L6 8"/>
</svg>
