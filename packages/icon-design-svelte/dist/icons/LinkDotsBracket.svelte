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
  <path d="M9 19L7 19C4.238 19 2 16.762 2 14C2 11.238 4.238 9 7 9L9 9"/>
  <path d="M15 9L17 9C19.762 9 22 11.238 22 14C22 16.762 19.762 19 17 19L15 19"/>
  <path d="M8 14L16 14"/>
  <path d="M3 4L3 4"/>
  <path d="M7 4L7 4"/>
</svg>
