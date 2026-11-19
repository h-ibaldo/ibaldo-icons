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
  <path d="M20.001 20L20.001 7.828C20.001 7.298 19.79 6.789 19.415 6.414L15.587 2.586C15.212 2.211 14.703 2 14.173 2L6.001 2C4.897 2 4.001 2.895 4.001 4L4.001 20C4.001 21.105 4.897 22 6.001 22L18.001 22C19.106 22 20.001 21.105 20.001 20Z"/>
  <path d="M14.001 2L14.001 7C14.001 7.552 14.449 8 15.001 8L20.001 8"/>
  <path d="M8.001 13L16.001 13"/>
  <path d="M8.001 9L10.001 9"/>
  <path d="M8.001 17L11.001 17"/>
  <path d="M15.001 17L15.001 17"/>
</svg>
