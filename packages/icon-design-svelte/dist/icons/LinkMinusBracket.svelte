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
  <path d="M9 14L7 14C4.238 14 2 11.762 2 9C2 6.238 4.238 4 7 4L9 4"/>
  <path d="M15 4L17 4C19.762 4 22 6.238 22 9C22 11.762 19.762 14 17 14L15 14"/>
  <path d="M8 9L16 9"/>
  <path d="M22 20L16 20"/>
</svg>
