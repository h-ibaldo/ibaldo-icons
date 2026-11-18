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
  <path d="M20 5L22 7"/>
  <path d="M21 6L18.566 8.438"/>
  <path d="M10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11C14 11.641 13.746 12.254 13.293 12.707L12 14"/>
  <path d="M12 17L12 17"/>
</svg>
