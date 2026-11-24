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
  <path d="M6 2L3 5L6 8"/>
  <path d="M13 5C17.418 5 21 8.582 21 13C21 17.418 17.418 21 13 21C8.582 21 5 17.418 5 13"/>
  <path d="M13 9L13 13L17 13"/>
  <path d="M3 5L13 5"/>
</svg>
