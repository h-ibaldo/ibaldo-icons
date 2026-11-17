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
  <path d="M3 9L3 15C3 16.656 4.344 18 6 18L9 18L12 22L15 18L18 18C19.656 18 21 16.656 21 15L21 9C21 7.344 19.656 6 18 6L6 6C4.344 6 3 7.344 3 9Z"/>
  <path d="M10.5 9L10.5 13C10.5 14.105 11.395 15 12.5 15L13.5 15"/>
  <path d="M13.5 11L10.5 11"/>
  <path d="M6 2L18 2"/>
</svg>
