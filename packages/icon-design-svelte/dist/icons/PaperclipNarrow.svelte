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
  <path d="M14.965 7.035L8.621 13.379C7.793 14.207 7.793 15.551 8.621 16.379C9.449 17.207 10.793 17.207 11.621 16.379L19.965 8.035C21.344 6.656 21.344 4.414 19.965 3.035C18.582 1.656 16.344 1.656 14.965 3.035L4.449 13.551C2.516 15.484 2.516 18.617 4.449 20.551C6.383 22.484 9.516 22.484 11.449 20.551L19.965 12.035"/>
</svg>
