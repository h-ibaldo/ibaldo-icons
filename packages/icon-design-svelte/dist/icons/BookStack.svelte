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
  <path d="M21 9L6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3L21 3"/>
  <path d="M21 15L6 15C4.344 15 3 13.656 3 12C3 10.344 4.344 9 6 9L21 9"/>
  <path d="M21 21L6 21C4.344 21 3 19.656 3 18C3 16.344 4.344 15 6 15L21 15"/>
</svg>
