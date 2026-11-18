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
  <path d="M22 2L22 2"/>
  <path d="M22 6L22 6"/>
  <path d="M22 10L22 10"/>
  <path d="M17 3.762C15.629 2.66 13.895 2 12 2C7.582 2 4 5.582 4 10C4 14.418 7.582 18 12 18L12 22C15.465 20.613 17.797 17.988 19.012 15"/>
</svg>
