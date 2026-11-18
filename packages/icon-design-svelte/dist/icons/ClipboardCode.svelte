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
  <path d="M7 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22"/>
  <path d="M15 4L18 4C19.105 4 20 4.895 20 6L20 12"/>
  <path d="M13.883 7L8.117 7C7.5 7 7 6.5 7 5.883L7 3.117C7 2.5 7.5 2 8.117 2L13.883 2C14.5 2 15 2.5 15 3.117L15 5.883C15 6.5 14.5 7 13.883 7Z"/>
  <path d="M11 16L8 19L11 22"/>
  <path d="M19 16L22 19L19 22"/>
  <path d="M14 22L16 16"/>
</svg>
