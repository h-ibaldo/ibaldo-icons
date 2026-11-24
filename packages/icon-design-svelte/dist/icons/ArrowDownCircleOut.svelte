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
  <path d="M15 18L12 21L9 18"/>
  <path d="M12 9L12 21"/>
  <path d="M6 20.98C3.574 19.156 2 16.27 2 13C2 7.477 6.477 3 12 3C17.523 3 22 7.477 22 13C22 16.27 20.426 19.156 18 20.98"/>
</svg>
