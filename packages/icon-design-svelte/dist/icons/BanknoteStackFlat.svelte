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
  <path d="M2 16L22 16L22 2L2 2Z"/>
  <path d="M15 9C15 11.211 13.656 13 12 13C10.344 13 9 11.211 9 9C9 6.789 10.344 5 12 5C13.656 5 15 6.789 15 9Z"/>
  <path d="M18 2C18 4.211 19.789 6 22 6"/>
  <path d="M22 12C19.789 12 18 13.789 18 16"/>
  <path d="M6 16C6 13.789 4.211 12 2 12"/>
  <path d="M2 6C4.211 6 6 4.211 6 2"/>
  <path d="M3 19L21 19"/>
  <path d="M4 22L20 22"/>
</svg>
