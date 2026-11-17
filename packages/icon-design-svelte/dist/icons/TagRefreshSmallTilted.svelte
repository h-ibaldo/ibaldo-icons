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
  <path d="M8.293 18.293L2.707 12.707C2.316 12.316 2.316 11.684 2.707 11.293L11.707 2.293C11.895 2.105 12.148 2 12.414 2L18 2C18.551 2 19 2.449 19 3L19 8.586C19 8.852 18.895 9.105 18.707 9.293L18 10"/>
  <path d="M14.5 7C14.777 7 15 6.777 15 6.5C15 6.223 14.777 6 14.5 6C14.223 6 14 6.223 14 6.5C14 6.777 14.223 7 14.5 7Z"/>
  <path d="M12.5 14L12.5 17L15.5 17"/>
  <path d="M14.387 21C15.086 21.617 15.992 22 17 22C19.211 22 21 20.211 21 18C21 15.789 19.211 14 17 14C15.137 14 13.586 15.277 13.141 17"/>
</svg>
