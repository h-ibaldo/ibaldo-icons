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
  <path d="M15 7L9.828 12.172C8.723 13.277 8.723 15.066 9.828 16.172C10.934 17.277 12.723 17.277 13.828 16.172L19.551 10.449C21.484 8.516 21.484 5.383 19.551 3.449C17.617 1.516 14.484 1.516 12.551 3.449L6.07 9.93C3.309 12.691 3.309 17.168 6.07 19.93C8.832 22.691 13.309 22.691 16.07 19.93L22 14"/>
  <path d="M2 3L7 3"/>
</svg>
