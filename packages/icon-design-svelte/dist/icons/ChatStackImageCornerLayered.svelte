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
  <path d="M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 8"/>
  <path d="M20 22L14 22C12.895 22 12 21.105 12 20L12 14C12 12.895 12.895 12 14 12L20 12C21.105 12 22 12.895 22 14L22 20C22 21.105 21.105 22 20 22Z"/>
  <path d="M22 16C18.688 16 16 18.688 16 22"/>
  <path d="M15 15L15 15"/>
  <path d="M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L8 18"/>
</svg>
