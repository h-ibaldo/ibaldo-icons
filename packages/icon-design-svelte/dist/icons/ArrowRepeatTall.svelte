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
  <path d="M18 2L21 5L18 8"/>
  <path d="M6 22L3 19L6 16"/>
  <path d="M21 5L7 5C4.789 5 3 6.789 3 9L3 13"/>
  <path d="M3 19L17 19C19.211 19 21 17.211 21 15L21 11"/>
</svg>
