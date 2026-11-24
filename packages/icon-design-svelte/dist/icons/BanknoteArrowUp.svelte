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
  <path d="M13 17L2 17L2 5L22 5L22 12"/>
  <path d="M2 13L3 13C4.656 13 6 14.344 6 16L6 17"/>
  <path d="M6 5L6 6C6 7.656 4.656 9 3 9L2 9"/>
  <path d="M18 5L18 6C18 7.656 19.344 9 21 9L22 9"/>
  <path d="M10 11C10 9.344 10.895 8 12 8C13.105 8 14 9.344 14 11C14 12.656 13.105 14 12 14C10.895 14 10 12.656 10 11Z"/>
  <path d="M19 21L19 14"/>
  <path d="M16 17L19 14L22 17"/>
</svg>
