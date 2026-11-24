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
  <path d="M2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 8.414C18 7.508 17.641 6.641 17 6"/>
  <path d="M22 14L22 5C22 3.344 20.656 2 19 2L14 2"/>
  <path d="M7.5 12C5.289 12 3.5 10.211 3.5 8C3.5 5.789 5.289 4 7.5 4C9.711 4 11.5 5.789 11.5 8C11.5 10.211 9.711 12 7.5 12Z"/>
  <path d="M7.5 2L7.5 4"/>
  <path d="M7.5 12L7.5 14"/>
  <path d="M12.695 5L10.965 6"/>
  <path d="M4.035 10L2.305 11"/>
  <path d="M12.695 11L10.965 10"/>
  <path d="M4.035 6L2.305 5"/>
</svg>
