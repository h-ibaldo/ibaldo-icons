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
  <path d="M6 22L14 22"/>
  <path d="M10 22L10 18"/>
  <path d="M22 13C22 10.238 19.762 8 17 8C14.238 8 12 10.238 12 13C12 15.762 14.238 18 17 18C19.762 18 22 15.762 22 13Z"/>
  <path d="M14 5L14 4C14 2.895 13.105 2 12 2L8 2C6.895 2 6 2.895 6 4L6 12C6 13.105 6.895 14 8 14"/>
  <path d="M2 11L2 12C2 15.313 4.688 18 8 18L10 18"/>
  <path d="M13.465 16.535L20.535 9.465"/>
</svg>
