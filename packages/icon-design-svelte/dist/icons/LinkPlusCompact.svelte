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
  <path d="M8 16L16 8"/>
  <path d="M10.051 6.949L12.551 4.449C14.484 2.516 17.617 2.516 19.551 4.449C21.484 6.383 21.484 9.516 19.551 11.449L17.051 13.949"/>
  <path d="M13.949 17.051L11.449 19.551C9.516 21.484 6.383 21.484 4.449 19.551C2.516 17.617 2.516 14.484 4.449 12.551L6.949 10.051"/>
  <path d="M19.5 17L19.5 22"/>
  <path d="M22 19.5L17 19.5"/>
</svg>
