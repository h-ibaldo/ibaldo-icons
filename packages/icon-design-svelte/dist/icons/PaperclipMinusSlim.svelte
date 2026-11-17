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
  <path d="M13 9L13 17C13 19.762 10.762 22 8 22C5.238 22 3 19.762 3 17L3 5.5C3 3.566 4.566 2 6.5 2C8.434 2 10 3.566 10 5.5L10 15C10 16.105 9.105 17 8 17C6.895 17 6 16.105 6 15L6 9"/>
  <path d="M21 4L16 4"/>
</svg>
