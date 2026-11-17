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
  <path d="M2 4L2 18L7 14L16 14C17.105 14 18 13.105 18 12L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4Z"/>
  <path d="M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 10.414C22 9.508 21.641 8.641 21 8"/>
  <path d="M9.422 10.492L7.148 8.219C6.473 7.543 6.473 6.449 7.148 5.773C7.824 5.098 8.918 5.098 9.594 5.773L10 6.184L10.406 5.773C11.082 5.098 12.176 5.098 12.852 5.773C13.527 6.449 13.527 7.543 12.852 8.219L10.574 10.492C10.258 10.813 9.742 10.813 9.422 10.492Z"/>
</svg>
