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
  <path d="M9 13L7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3L9 3"/>
  <path d="M15 3L17 3C19.762 3 22 5.238 22 8C22 10.762 19.762 13 17 13L15 13"/>
  <path d="M8 8L16 8"/>
  <path d="M18 21L22 17"/>
  <path d="M18 17L22 21"/>
</svg>
