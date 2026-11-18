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
  <path d="M18 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L15.172 22C15.703 22 16.211 21.789 16.586 21.414L19.414 18.586C19.789 18.211 20 17.703 20 17.172L20 4C20 2.895 19.105 2 18 2Z"/>
  <path d="M15 22L15 17L20 17"/>
  <path d="M11 6L16 6"/>
  <path d="M8 6L8 6"/>
  <path d="M11 10L16 10"/>
  <path d="M8 10L8 10"/>
  <path d="M11 14L16 14"/>
  <path d="M8 14L8 14"/>
</svg>
