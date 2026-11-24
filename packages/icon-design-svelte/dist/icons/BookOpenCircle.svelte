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
  <path d="M12 10L12 17"/>
  <path d="M12 10C11.387 8.773 10.133 8 8.766 8L7 8L7 15L8.766 15C10.133 15 11.387 15.773 12 17"/>
  <path d="M12 10C12.613 8.773 13.867 8 15.234 8L17 8L17 15L15.234 15C13.867 15 12.613 15.773 12 17"/>
</svg>
