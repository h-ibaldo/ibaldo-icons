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
  <path d="M14.5 10.5C14.5 11.883 13.383 13 12 13C10.617 13 9.5 11.883 9.5 10.5C9.5 9.117 10.617 8 12 8C13.383 8 14.5 9.117 14.5 10.5Z"/>
  <path d="M16 16C16 14.344 14.656 13 13 13L11 13C9.344 13 8 14.344 8 16"/>
  <path d="M12 2C6.477 2 2 6.477 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"/>
</svg>
