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
  <path d="M14 14L10 14C8.895 14 8 13.105 8 12L8 4C8 2.895 8.895 2 10 2L14 2C15.105 2 16 2.895 16 4L16 12C16 13.105 15.105 14 14 14Z"/>
  <path d="M8 22L16 22"/>
  <path d="M12 22L12 18"/>
  <path d="M4 11L4 12C4 15.313 6.688 18 10 18L14 18C17.313 18 20 15.313 20 12L20 11"/>
</svg>
