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
  <path d="M2 16L22 16L22 22L2 22Z"/>
  <path d="M19 19L18 19"/>
  <path d="M15 19L14 19"/>
  <path d="M11 19L10 19"/>
  <path d="M3 6L12 16L14.301 13.445"/>
  <path d="M19.746 7.395L21 6"/>
  <path d="M17 6L11 6L11 11L17 11Z"/>
  <path d="M14 2C12.676 2 11.602 3.074 11.602 4.398L11.602 6L16.398 6L16.398 4.398C16.398 3.074 15.324 2 14 2Z"/>
</svg>
