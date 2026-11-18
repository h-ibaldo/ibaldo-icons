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
  <path d="M22 13C22 15.211 20.211 17 18 17C15.789 17 14 15.211 14 13C14 10.789 15.789 9 18 9C20.211 9 22 10.789 22 13Z"/>
  <path d="M15 15.621L15 22L18 21L21 22L21 15.621"/>
  <path d="M11 20L5 20C3.895 20 3 19.105 3 18L3 4C3 2.895 3.895 2 5 2L18 2C19.105 2 20 2.895 20 4L20 6"/>
  <path d="M7 7L13 7"/>
  <path d="M7 11L10 11"/>
  <path d="M7 15L10 15"/>
</svg>
