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
  <path d="M11 16.5C11 19.539 13.461 22 16.5 22C19.539 22 22 19.539 22 16.5C22 13.461 19.539 11 16.5 11C13.461 11 11 13.461 11 16.5Z"/>
  <path d="M15 15L18 18"/>
  <path d="M18 15L15 18"/>
  <path d="M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z"/>
  <path d="M5.5 7L6.5 8L8.5 6"/>
</svg>
