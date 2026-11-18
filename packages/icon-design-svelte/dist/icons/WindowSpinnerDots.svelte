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
  <path d="M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"/>
  <path d="M2 8L22 8"/>
  <path d="M5 5L5 5"/>
  <path d="M8 5L8 5"/>
  <path d="M11 5L11 5"/>
  <path d="M8 15L8 15"/>
  <path d="M16 15L16 15"/>
  <path d="M12 11L12 11"/>
  <path d="M12 19L12 19"/>
  <path d="M9.172 17.828L9.172 17.828"/>
  <path d="M14.828 12.172L14.828 12.172"/>
  <path d="M9.172 12.172L9.172 12.172"/>
  <path d="M14.828 17.828L14.828 17.828"/>
</svg>
