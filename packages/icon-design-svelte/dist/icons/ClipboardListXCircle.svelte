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
  <path d="M22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5Z"/>
  <path d="M18 15L15 18"/>
  <path d="M15 15L18 18"/>
  <path d="M9 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4"/>
  <path d="M16 4L19 4C20.105 4 21 4.895 21 6L21 9"/>
  <path d="M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z"/>
  <path d="M9 11L7 11"/>
  <path d="M8 14L7 14"/>
  <path d="M8 17L7 17"/>
</svg>
