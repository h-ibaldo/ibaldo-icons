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
  <path d="M9 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 15"/>
  <path d="M22 10C22 5.582 18.418 2 14 2"/>
  <path d="M14 22L14 12C14 10.895 13.105 10 12 10L2 10"/>
  <path d="M14 16L2 16"/>
  <path d="M11 13L11 13"/>
  <path d="M8 13L8 13"/>
  <path d="M5 13L5 13"/>
  <path d="M18 10C18 7.789 16.211 6 14 6"/>
</svg>
