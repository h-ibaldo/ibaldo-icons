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
  <path d="M10 12L14 12"/>
  <path d="M10 15L9 15C7.344 15 6 13.656 6 12C6 10.344 7.344 9 9 9L10 9"/>
  <path d="M14 9L15 9C16.656 9 18 10.344 18 12C18 13.656 16.656 15 15 15L14 15"/>
  <path d="M6 18L8 20L6 22"/>
  <path d="M2 20L8 20"/>
  <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"/>
</svg>
