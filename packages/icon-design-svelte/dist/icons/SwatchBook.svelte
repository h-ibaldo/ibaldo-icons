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
  <path d="M4 2L8 2C9.105 2 10 2.895 10 4L10 20C10 21.105 9.105 22 8 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2Z"/>
  <path d="M10 8L14.586 3.414C15.367 2.633 16.633 2.633 17.414 3.414L20.586 6.586C21.367 7.367 21.367 8.633 20.586 9.414L10 20"/>
  <path d="M16 14L20 14C21.105 14 22 14.895 22 16L22 20C22 21.105 21.105 22 20 22L8 22"/>
  <path d="M6 18L6 18"/>
</svg>
