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
  <path d="M22 11L22 18L2 18L2 4L14 4"/>
  <path d="M12 21L12 18"/>
  <path d="M18 21L6 21"/>
  <path d="M17 5.5C17 4.121 18.121 3 19.5 3C20.879 3 22 4.121 22 5.5C22 6.879 20.879 8 19.5 8C18.121 8 17 6.879 17 5.5Z"/>
</svg>
