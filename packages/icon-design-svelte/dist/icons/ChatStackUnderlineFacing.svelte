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
  <path d="M22 22L13 22"/>
  <path d="M2 4L2 14L7 10L16 10C17.105 10 18 9.105 18 8L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"/>
  <path d="M8 13C8 14.105 8.895 15 10 15L17 15L22 18L22 9.414C22 8.508 21.641 7.641 21 7"/>
</svg>
