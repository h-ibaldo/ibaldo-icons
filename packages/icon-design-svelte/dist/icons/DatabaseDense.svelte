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
  <path d="M4 6C4 4.344 7.582 3 12 3C16.418 3 20 4.344 20 6C20 7.656 16.418 9 12 9C7.582 9 4 7.656 4 6Z"/>
  <path d="M20 6L20 18"/>
  <path d="M4 18L4 6"/>
  <path d="M20 10C20 11.656 16.418 13 12 13C7.582 13 4 11.656 4 10"/>
  <path d="M20 14C20 15.656 16.418 17 12 17C7.582 17 4 15.656 4 14"/>
  <path d="M20 18C20 19.656 16.418 21 12 21C7.582 21 4 19.656 4 18"/>
</svg>
