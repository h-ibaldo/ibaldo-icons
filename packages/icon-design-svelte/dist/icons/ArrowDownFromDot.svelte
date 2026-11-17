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
  <path d="M15 19L12 22L9 19"/>
  <path d="M12 12L12 22"/>
  <path d="M9 5C9 6.656 10.344 8 12 8C13.656 8 15 6.656 15 5C15 3.344 13.656 2 12 2C10.344 2 9 3.344 9 5Z"/>
</svg>
