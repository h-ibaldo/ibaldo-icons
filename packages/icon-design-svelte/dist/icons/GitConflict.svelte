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
  <path d="M18 15C19.656 15 21 16.344 21 18C21 19.656 19.656 21 18 21C16.344 21 15 19.656 15 18C15 16.344 16.344 15 18 15Z"/>
  <path d="M18 15L18 8C18 6.895 17.105 6 16 6L10.938 6"/>
  <path d="M6.063 21L6.063 11"/>
  <path d="M3 3L9.098 9"/>
  <path d="M3 9L9.098 3"/>
</svg>
