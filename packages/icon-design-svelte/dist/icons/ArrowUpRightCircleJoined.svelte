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
  <path d="M10 9L15 9L15 14"/>
  <path d="M9.563 21.688C11.547 22.188 13.734 22.164 16.082 21.051C19.398 19.48 21.766 16.273 21.98 12.609C22.348 6.418 17.082 1.355 10.828 2.066C6.195 2.594 2.469 6.414 2.043 11.059C1.898 12.633 2.121 14.141 2.633 15.508C3.383 17.508 6.012 17.988 7.523 16.477L15 9"/>
</svg>
