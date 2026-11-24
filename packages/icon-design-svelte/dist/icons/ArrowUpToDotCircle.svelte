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
  <path d="M9 13L12 10L15 13"/>
  <path d="M12 17L12 10"/>
  <path d="M10 4C10 5.105 10.895 6 12 6C13.105 6 14 5.105 14 4C14 2.895 13.105 2 12 2C10.895 2 10 2.895 10 4Z"/>
  <path d="M6 4.016C3.574 5.84 2 8.73 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 8.73 20.426 5.84 18 4.016"/>
</svg>
