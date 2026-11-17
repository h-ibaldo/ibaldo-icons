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
  <path d="M5 8L2 7"/>
  <path d="M8 5L7 2"/>
  <path d="M19 16L22 17"/>
  <path d="M16 19L17 22"/>
  <path d="M13 17L10.004 19.996C8.344 21.656 5.656 21.656 3.996 19.996C2.34 18.34 2.34 15.656 3.992 13.996L7 10.98"/>
  <path d="M11 6.98L13.996 3.98C15.656 2.324 18.344 2.324 20.004 3.98L20.004 3.984C21.66 5.637 21.66 8.324 20.008 9.98L17 13"/>
  <path d="M9 15L15 9"/>
</svg>
