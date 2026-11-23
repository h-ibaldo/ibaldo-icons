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
  <path d="M22 2L22 5L19 5"/>
  <path d="M12 12L12 9L15 9"/>
  <path d="M21.578 9C20.805 10.766 19.051 12 17 12C14.949 12 13.195 10.766 12.422 9"/>
  <path d="M12.43 5C13.203 3.238 14.953 2 17 2C19.051 2 20.805 3.234 21.578 5"/>
  <path d="M2.387 7.777C4.457 6.465 6.742 5.617 9.086 5.238"/>
  <path d="M5.59 11.852C6.641 11.188 7.773 10.703 8.941 10.395"/>
  <path d="M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"/>
  <path d="M12 20L12 20"/>
</svg>
