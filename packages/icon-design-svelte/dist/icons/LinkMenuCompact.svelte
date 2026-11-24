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
  <path d="M9 17L17 9"/>
  <path d="M11.051 7.949L13.551 5.449C15.484 3.516 18.617 3.516 20.551 5.449C22.484 7.383 22.484 10.516 20.551 12.449L18.051 14.949"/>
  <path d="M14.949 18.051L12.449 20.551C10.516 22.484 7.383 22.484 5.449 20.551C3.516 18.617 3.516 15.484 5.449 13.551L7.949 11.051"/>
  <path d="M2 2L8 2"/>
  <path d="M2 5L8 5"/>
  <path d="M2 8L5 8"/>
</svg>
