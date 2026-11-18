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
  <path d="M15.965 7.035L9.621 13.379C8.793 14.207 8.793 15.551 9.621 16.379C10.449 17.207 11.793 17.207 12.621 16.379L20.965 8.035C22.344 6.656 22.344 4.414 20.965 3.035C19.582 1.656 17.344 1.656 15.965 3.035L5.449 13.551C3.516 15.484 3.516 18.617 5.449 20.551C7.383 22.484 10.516 22.484 12.449 20.551L20.965 12.035"/>
  <path d="M8 5L5 2L2 5"/>
  <path d="M5 9L5 2"/>
</svg>
