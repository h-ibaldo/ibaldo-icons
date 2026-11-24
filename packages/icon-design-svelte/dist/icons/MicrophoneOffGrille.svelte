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
  <path d="M12 18L12 21"/>
  <path d="M9 8L7 8"/>
  <path d="M17 12L14 12"/>
  <path d="M7 22L17 22"/>
  <path d="M4 18L20 2"/>
  <path d="M7.27 14.73C7.902 16.625 9.672 18 11.781 18L12.219 18C14.859 18 17 15.859 17 13.219L17 6.781C17 6.25 16.895 5.746 16.734 5.266"/>
  <path d="M14.434 2.566C13.77 2.215 13.023 2 12.219 2L11.781 2C9.141 2 7 4.141 7 6.781L7 10"/>
</svg>
