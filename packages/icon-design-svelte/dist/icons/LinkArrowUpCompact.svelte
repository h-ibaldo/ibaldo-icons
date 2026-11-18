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
  <path d="M15 17L7 9"/>
  <path d="M12.949 7.949L10.449 5.449C8.516 3.516 5.383 3.516 3.449 5.449C1.516 7.383 1.516 10.516 3.449 12.449L5.949 14.949"/>
  <path d="M9.051 18.051L11.551 20.551C13.484 22.484 16.617 22.484 18.551 20.551C20.484 18.617 20.484 15.484 18.551 13.551L16.051 11.051"/>
  <path d="M22.004 4L20.004 2L18.004 4"/>
  <path d="M20.004 9L20.004 2"/>
</svg>
