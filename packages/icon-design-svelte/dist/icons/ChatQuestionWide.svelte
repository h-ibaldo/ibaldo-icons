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
  <path d="M12 13L12 13"/>
  <path d="M12 10C13.105 10 14 9.105 14 8C14 6.895 13.105 6 12 6C11.449 6 10.949 6.223 10.586 6.586"/>
  <path d="M14.5 2L9.5 2C5.359 2 2 5.355 2 9.5C2 12.766 4.09 15.531 7 16.563L7 21L11.668 17L14.5 17C18.641 17 22 13.645 22 9.5C22 5.355 18.641 2 14.5 2Z"/>
</svg>
