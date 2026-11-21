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
  <path d="M21 18L21 18.793C21 20.563 19.637 22 17.953 22L3 22C2.449 22 2 21.551 2 21L2 7.793C2 7.242 2.449 6.793 3 6.793L17.953 6.793C19.637 6.793 21 8.23 21 10L21 11"/>
  <path d="M22 18L14.5 18C12.566 18 11 16.434 11 14.5C11 12.566 12.566 11 14.5 11L22 11Z"/>
  <path d="M14.5 14C14.223 14 14 14.223 14 14.5C14 14.777 14.223 15 14.5 15C14.777 15 15 14.777 15 14.5C15 14.223 14.777 14 14.5 14Z"/>
  <path d="M8 6.793L15 2L18 6.793"/>
  <path d="M3 6.793L9 2L12 4"/>
</svg>
