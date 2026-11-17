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
  <path d="M3 2L21 21"/>
  <path d="M5.383 4.516C3.313 6.348 2 9.02 2 12C2 14.625 3.02 17.008 4.672 18.789L2 22L12 22C14.789 22 17.309 20.855 19.121 19.016"/>
  <path d="M21.434 15.293C21.793 14.258 22 13.156 22 12C22 6.477 17.523 2 12 2C11.035 2 10.105 2.145 9.219 2.398"/>
  <path d="M15 10L16 10"/>
  <path d="M8 10L10.578 10"/>
  <path d="M8 14L14.367 14"/>
</svg>
