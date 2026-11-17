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
  <path d="M7 19L20 19C21.105 19 22 18.105 22 17L22 7C22 5.895 21.105 5 20 5L7 5C5.895 5 5 5.895 5 7L5 10L2 12L5 14L5 17C5 18.105 5.895 19 7 19Z"/>
  <path d="M9 10L18 10"/>
  <path d="M9 14L15 14"/>
</svg>
