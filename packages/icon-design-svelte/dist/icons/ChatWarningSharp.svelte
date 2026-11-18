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
  <path d="M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z"/>
  <path d="M15.5 7L15.5 6"/>
  <path d="M15.5 10L15.5 10"/>
  <path d="M9 2.461C4.941 3.734 2 7.523 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C15.699 22 18.922 19.988 20.652 17"/>
</svg>
