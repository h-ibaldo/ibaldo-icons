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
  <path d="M3 2L6 2L8 4L10 2L13 2"/>
  <path d="M13 22L10 22L8 20L6 22L3 22"/>
  <path d="M8 4L8 20"/>
  <path d="M5 15L4 15C2.895 15 2 14.105 2 13L2 11C2 9.895 2.895 9 4 9L5 9"/>
  <path d="M11 9L20 9C21.105 9 22 9.895 22 11L22 13C22 14.105 21.105 15 20 15L11.043 15"/>
</svg>
