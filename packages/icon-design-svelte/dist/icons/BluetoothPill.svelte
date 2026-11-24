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
  <path d="M12 22C7.582 22 4 18.418 4 14L4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10L20 14C20 18.418 16.418 22 12 22Z"/>
  <path d="M12 6L12 18"/>
  <path d="M8 9L12 12L16 9L12 6"/>
  <path d="M12 18L16 15L12 12L8 15"/>
</svg>
