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
  <path d="M17 19C17 17.895 17.895 17 19 17C20.105 17 21 17.895 21 19C21 20.105 20.105 21 19 21C17.895 21 17 20.105 17 19Z"/>
  <path d="M4.5 2L4.5 7"/>
  <path d="M7 4.5L2 4.5"/>
  <path d="M21.121 4.637L19.363 2.879C18.191 1.707 16.293 1.707 15.121 2.879L3 15L2 22L9 21L21.121 8.879C22.293 7.707 22.293 5.809 21.121 4.637Z"/>
  <path d="M14 4L20 10"/>
  <path d="M12 6L18 12"/>
  <path d="M3.973 21.719C3.848 20.84 3.16 20.152 2.281 20.027"/>
  <path d="M7 17L15 9"/>
</svg>
