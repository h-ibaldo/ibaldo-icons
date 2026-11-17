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
  <path d="M9 17L7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7L9 7"/>
  <path d="M15 7L17 7C19.762 7 22 9.238 22 12C22 14.762 19.762 17 17 17L15 17"/>
  <path d="M8 12L16 12"/>
</svg>
