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
  <path d="M10.031 22L10.031 18L7 18L12.031 10L17 18L14.031 18L14.031 22Z"/>
  <path d="M16 10C16 7.789 14.211 6 12 6C9.789 6 8 7.789 8 10"/>
  <path d="M18.922 14C19.605 12.82 20 11.461 20 10C20 5.582 16.418 2 12 2C7.582 2 4 5.582 4 10C4 11.461 4.398 12.82 5.078 14"/>
</svg>
