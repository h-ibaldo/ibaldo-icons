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
  <path d="M21 6L18.563 8.438"/>
  <path d="M11.5 8.5C14.262 8.5 16.5 10.738 16.5 13.5"/>
  <path d="M11.5 8.5L11.5 13.5L16.5 13.5"/>
</svg>
