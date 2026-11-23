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
  <path d="M3 22L3 13.461C3 11.551 4.477 10 6.301 10L10.699 10C12.523 10 14 11.551 14 13.461L14 22"/>
  <path d="M10 8L10 5L7 5L7 8Z"/>
  <path d="M2 15L15 15"/>
  <path d="M16 5L16 5"/>
  <path d="M13 6L13 6"/>
  <path d="M19 6L19 6"/>
  <path d="M19 3L19 3"/>
  <path d="M22 5L22 5"/>
  <path d="M22 2L22 2"/>
  <path d="M22 8L22 8"/>
  <path d="M16 8L16 8"/>
  <path d="M22 11L22 11"/>
  <path d="M19 9L19 9"/>
</svg>
