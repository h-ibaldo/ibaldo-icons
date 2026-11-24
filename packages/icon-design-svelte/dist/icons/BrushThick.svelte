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
  <path d="M4 16C4 13.789 5.789 12 8 12C10.211 12 12 13.789 12 16C12 18.762 9.762 21 7 21L2 21C3.281 19.719 4 17.984 4 16.172Z"/>
  <path d="M8.063 12L17 3C17.531 2.469 18.25 2.172 19 2.172C20.563 2.172 21.828 3.438 21.828 5C21.828 5.75 21.531 6.469 21 7L12.063 16L12 15.938"/>
</svg>
