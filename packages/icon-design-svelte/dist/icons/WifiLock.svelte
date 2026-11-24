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
  <path d="M2.387 7.777C5.738 5.656 9.645 4.75 13.465 5.059"/>
  <path d="M5.59 11.852C7.871 10.406 10.535 9.809 13.133 10.055"/>
  <path d="M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"/>
  <path d="M22 6L16 6L16 11L22 11Z"/>
  <path d="M19 2C17.676 2 16.602 3.074 16.602 4.398L16.602 6L21.398 6L21.398 4.398C21.398 3.074 20.324 2 19 2Z"/>
  <path d="M12 20L12 20"/>
</svg>
