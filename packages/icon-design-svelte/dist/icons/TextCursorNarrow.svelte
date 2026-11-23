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
  <path d="M8 2L8.758 2C9.555 2 10.316 2.316 10.879 2.879L12 4L13.121 2.879C13.684 2.316 14.445 2 15.242 2L16 2"/>
  <path d="M16 22L15.242 22C14.445 22 13.684 21.684 13.121 21.121L12 20L10.879 21.121C10.316 21.684 9.555 22 8.758 22L8 22"/>
  <path d="M12 4L12 20"/>
</svg>
