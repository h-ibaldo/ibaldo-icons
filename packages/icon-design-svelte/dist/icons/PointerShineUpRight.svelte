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
  <path d="M15.949 9.23L11.906 21.363C11.652 22.117 10.633 22.23 10.223 21.547L7.309 16.691L2.453 13.777C1.77 13.367 1.883 12.344 2.637 12.094L14.77 8.051C15.5 7.805 16.191 8.5 15.949 9.23Z"/>
  <path d="M15 2L15 3"/>
  <path d="M22 9L21 9"/>
  <path d="M19.949 4.051L19.242 4.758"/>
  <path d="M19.949 13.949L19.242 13.242"/>
  <path d="M10.758 4.758L10.051 4.051"/>
</svg>
