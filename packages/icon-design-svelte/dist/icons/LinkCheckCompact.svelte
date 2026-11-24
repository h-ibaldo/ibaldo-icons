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
  <path d="M7 15L15 7"/>
  <path d="M9.051 5.949L11.551 3.449C13.484 1.516 16.617 1.516 18.551 3.449C20.484 5.383 20.484 8.516 18.551 10.449L16.051 12.949"/>
  <path d="M12.949 16.051L10.449 18.551C8.516 20.484 5.383 20.484 3.449 18.551C1.516 16.617 1.516 13.484 3.449 11.551L5.949 9.051"/>
  <path d="M16 20L18 22L22 18"/>
</svg>
