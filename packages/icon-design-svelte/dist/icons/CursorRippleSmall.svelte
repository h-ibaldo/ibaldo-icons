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
  <path d="M22 19.527L17.262 14.793L20.559 13.691C21.332 13.434 21.363 12.352 20.605 12.051L8.133 7.063C7.461 6.793 6.793 7.461 7.063 8.133L12.051 20.605C12.355 21.363 13.438 21.332 13.691 20.559L14.793 17.262L19.527 22Z"/>
  <path d="M10.977 4C10.066 2.793 8.629 2 7 2C4.238 2 2 4.238 2 7C2 8.633 2.793 10.063 4 10.977"/>
</svg>
