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
  <path d="M18 2L21 5L18 8"/>
  <path d="M11 5C6.582 5 3 8.582 3 13C3 17.418 6.582 21 11 21C15.418 21 19 17.418 19 13"/>
  <path d="M11 9L11 13L15 13"/>
  <path d="M21 5L11 5"/>
</svg>
