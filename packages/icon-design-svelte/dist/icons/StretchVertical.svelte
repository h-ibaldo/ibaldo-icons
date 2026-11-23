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
  <path d="M22 4L22 20C22 21.105 21.105 22 20 22L17 22C15.895 22 15 21.105 15 20L15 4C15 2.895 15.895 2 17 2L20 2C21.105 2 22 2.895 22 4Z"/>
  <path d="M9 4L9 20C9 21.105 8.105 22 7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L7 2C8.105 2 9 2.895 9 4Z"/>
</svg>
