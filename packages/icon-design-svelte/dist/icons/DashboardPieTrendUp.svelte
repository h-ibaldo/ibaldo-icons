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
  <path d="M14 8C14 4.688 11.313 2 8 2C4.688 2 2 4.688 2 8C2 11.313 4.688 14 8 14C11.313 14 14 11.313 14 8Z"/>
  <path d="M8 2L8 8L14 8"/>
  <path d="M18 3L22 3"/>
  <path d="M18 7L22 7"/>
  <path d="M18 11L22 11"/>
  <path d="M3 22L9 18L16 22L22 16"/>
  <path d="M18 16L22 16L22 20"/>
</svg>
