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
  <path d="M5 11L13.5 11C16.539 11 19 13.461 19 16.5C19 19.539 16.539 22 13.5 22L5 22L5 2L13.5 2C15.984 2 18 4.016 18 6.5C18 8.984 15.984 11 13.5 11L5 11"/>
</svg>
