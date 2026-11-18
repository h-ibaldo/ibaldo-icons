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
  <path d="M9 13L7.5 11.5C6.395 10.395 6.395 8.605 7.5 7.5C8.605 6.395 10.395 6.395 11.5 7.5L13 9"/>
  <path d="M15 11L16.5 12.5C17.605 13.605 17.605 15.395 16.5 16.5C15.395 17.605 13.605 17.605 12.5 16.5L11 15"/>
  <path d="M6 18L8 20L6 22"/>
  <path d="M2 20L8 20"/>
  <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"/>
  <path d="M11 11L13 13"/>
</svg>
