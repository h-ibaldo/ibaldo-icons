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
  <path d="M9.23 8.051L21.363 12.094C22.117 12.348 22.23 13.367 21.547 13.777L16.691 16.691L13.777 21.547C13.367 22.23 12.344 22.117 12.094 21.363L8.051 9.23C7.805 8.5 8.5 7.809 9.23 8.051Z"/>
  <path d="M9 2L9 3"/>
  <path d="M2 9L3 9"/>
  <path d="M4.051 4.051L4.758 4.758"/>
  <path d="M4.051 13.949L4.758 13.242"/>
  <path d="M13.242 4.758L13.949 4.051"/>
</svg>
