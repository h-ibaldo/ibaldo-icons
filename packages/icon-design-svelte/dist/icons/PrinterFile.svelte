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
  <path d="M17 10L20 10C21.105 10 22 10.895 22 12L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 12C2 10.895 2.895 10 4 10L7 10"/>
  <path d="M7 13L7 2L14 2L17 5L17 13"/>
  <path d="M7 18L7 22"/>
  <path d="M17 22L17 18"/>
  <path d="M17 13L7 13"/>
  <path d="M14 2L14 5L17 5"/>
  <path d="M18 18L6 18"/>
</svg>
