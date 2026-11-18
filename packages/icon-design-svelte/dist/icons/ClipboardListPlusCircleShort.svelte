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
  <path d="M10 22L5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4"/>
  <path d="M16 4L19 4C20.105 4 21 4.895 21 6L21 10"/>
  <path d="M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z"/>
  <path d="M7 12L10 12"/>
  <path d="M7 17L8 17"/>
  <path d="M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"/>
  <path d="M17 15L17 19"/>
  <path d="M19 17L15 17"/>
</svg>
