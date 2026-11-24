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
  <path d="M11 2L5 2C3.344 2 2 3.344 2 5L2 13"/>
  <path d="M16 12C13.789 12 12 10.211 12 8C12 5.789 13.789 4 16 4C18.211 4 20 5.789 20 8C20 10.211 18.211 12 16 12Z"/>
  <path d="M16 2L16 4"/>
  <path d="M16 12L16 14"/>
  <path d="M21.195 5L19.465 6"/>
  <path d="M12.535 10L10.805 11"/>
  <path d="M21.195 11L19.465 10"/>
  <path d="M12.535 6L10.805 5"/>
  <path d="M14 22L17 18L19 18C20.656 18 22 16.656 22 15"/>
  <path d="M7 6.785C6.391 7.332 6 8.117 6 9L6 15C6 16.656 7.344 18 9 18L11 18"/>
</svg>
