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
  <path d="M16 19L19 22L22 19"/>
  <path d="M19 16L19 22"/>
  <path d="M13 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13.016 2C13.646 2 14.25 2.25 14.696 2.696L18.304 6.304C18.75 6.75 19 7.354 19 7.984L19 12"/>
  <path d="M13 2L13 7C13 7.552 13.448 8 14 8L19 8"/>
</svg>
