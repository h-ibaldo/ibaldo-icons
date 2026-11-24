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
  <path d="M3 7L3 12.586C3 12.852 3.105 13.105 3.293 13.293L11.707 21.707C12.098 22.098 12.73 22.098 13.121 21.707L18.707 16.121C19.098 15.73 19.098 15.098 18.707 14.707L10.293 6.293C10.105 6.105 9.852 6 9.586 6L4 6C3.449 6 3 6.449 3 7Z"/>
  <path d="M21 11L12.293 2.293C12.105 2.105 11.852 2 11.586 2L6 2"/>
  <path d="M7.5 11C7.223 11 7 10.777 7 10.5C7 10.223 7.223 10 7.5 10C7.777 10 8 10.223 8 10.5C8 10.777 7.777 11 7.5 11Z"/>
</svg>
