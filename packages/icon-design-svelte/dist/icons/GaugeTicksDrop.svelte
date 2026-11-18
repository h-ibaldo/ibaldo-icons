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
  <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"/>
  <path d="M12 2L12 5"/>
  <path d="M12 19L12 22"/>
  <path d="M22 12L19 12"/>
  <path d="M5 12L2 12"/>
  <path d="M12 8L9.863 11.563C9.34 12.434 9.398 13.531 10.008 14.34C11.004 15.672 12.996 15.672 13.992 14.34C14.602 13.531 14.66 12.434 14.137 11.563Z"/>
</svg>
