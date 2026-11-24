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
  <path d="M12 2C6.477 2 2 6.477 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"/>
  <path d="M9 13L15 13C15 14.656 13.656 16 12 16C10.344 16 9 14.656 9 13Z"/>
  <path d="M14.5 10C14.223 10 14 9.777 14 9.5C14 9.223 14.223 9 14.5 9C14.777 9 15 9.223 15 9.5C15 9.777 14.777 10 14.5 10Z"/>
  <path d="M9.5 10C9.223 10 9 9.777 9 9.5C9 9.223 9.223 9 9.5 9C9.777 9 10 9.223 10 9.5C10 9.777 9.777 10 9.5 10Z"/>
</svg>
