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
  <path d="M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z"/>
  <path d="M10 2L14 2"/>
  <path d="M9 10L12 13"/>
  <path d="M20 5L22 7"/>
  <path d="M21 6L18.563 8.434"/>
  <path d="M7 13C7 15.762 9.238 18 12 18C13.383 18 14.633 17.441 15.535 16.535"/>
  <path d="M12.5 13C12.5 13.277 12.277 13.5 12 13.5C11.723 13.5 11.5 13.277 11.5 13C11.5 12.723 11.723 12.5 12 12.5C12.277 12.5 12.5 12.723 12.5 13Z"/>
</svg>
