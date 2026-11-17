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
  <path d="M22 18L18 22"/>
  <path d="M18 18L22 22"/>
  <path d="M7 13L10 16L13 13"/>
  <path d="M10 16L10 11.5C10 9.566 11.566 8 13.5 8C15.434 8 17 9.566 17 11.5L17 12"/>
  <path d="M21.793 14C21.926 13.352 22 12.688 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.688 22 13.352 21.926 14 21.793"/>
</svg>
