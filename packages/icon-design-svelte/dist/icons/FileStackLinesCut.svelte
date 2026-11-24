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
  <path d="M11 14L17 14"/>
  <path d="M11 10L17 10"/>
  <path d="M11 6L15 6"/>
  <path d="M3 7L3 20C3 21.105 3.895 22 5 22L16 22"/>
  <path d="M9 18L19 18C20.105 18 21 17.105 21 16L21 7.243C21 6.447 20.684 5.684 20.121 5.121L17.879 2.879C17.316 2.316 16.553 2 15.757 2L9 2C7.895 2 7 2.895 7 4L7 16C7 17.105 7.895 18 9 18Z"/>
</svg>
