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
  <path d="M10 16L20 16C21.105 16 22 15.105 22 14L22 4C22 2.895 21.105 2 20 2L10 2C8.895 2 8 2.895 8 4L8 14C8 15.105 8.895 16 10 16Z"/>
  <path d="M2 10C2 8.895 2.895 8 4 8"/>
  <path d="M4 22C2.895 22 2 21.105 2 20"/>
  <path d="M16 20C16 21.105 15.105 22 14 22"/>
  <path d="M2 14L2 16"/>
  <path d="M8 22L10 22"/>
  <path d="M13 6.5C13 6.777 12.777 7 12.5 7C12.223 7 12 6.777 12 6.5C12 6.223 12.223 6 12.5 6C12.777 6 13 6.223 13 6.5Z"/>
  <path d="M22 7C17.027 7 13 11.027 13 16"/>
</svg>
