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
  <path d="M10 2L4 2C2.895 2 2 2.895 2 5L2 19L7 15L15.586 15C16.492 15 17.359 14.641 18 14"/>
  <path d="M8 18C8 19.105 8.895 20 10 20L17 20L22 22L22 13"/>
  <path d="M19.098 2L13.902 2L11.305 6.5L13.902 11L19.098 11L21.695 6.5Z"/>
  <path d="M17.5 6.5C17.5 5.945 17.051 5.5 16.5 5.5C15.949 5.5 15.5 5.945 15.5 6.5C15.5 7.055 15.949 7.5 16.5 7.5C17.051 7.5 17.5 7.055 17.5 6.5Z"/>
</svg>
