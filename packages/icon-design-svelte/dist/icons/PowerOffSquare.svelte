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
  <path d="M12 5L12 12"/>
  <path d="M3.168 3.168L20.832 20.832"/>
  <path d="M12.918 16.918C12.621 16.973 12.313 17 12 17C9.238 17 7 14.762 7 12C7 11.688 7.027 11.379 7.082 11.082"/>
  <path d="M8.465 8.465C8.633 8.297 8.809 8.141 9 8"/>
  <path d="M15 8C16.215 8.91 17 10.363 17 12C17 13.379 16.441 14.629 15.535 15.535"/>
  <path d="M6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2Z"/>
</svg>
