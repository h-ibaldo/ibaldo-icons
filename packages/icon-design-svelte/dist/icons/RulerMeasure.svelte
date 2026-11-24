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
  <path d="M3 11L21 11C21.551 11 22 11.449 22 12L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 12C2 11.449 2.449 11 3 11Z"/>
  <path d="M6 14L6 11"/>
  <path d="M2 8L2 4"/>
  <path d="M22 8L22 4"/>
  <path d="M2 6L22 6"/>
  <path d="M10 14L10 11"/>
  <path d="M14 14L14 11"/>
  <path d="M18 14L18 11"/>
</svg>
