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
  <path d="M12.219 18L11.781 18C9.141 18 7 15.859 7 13.219L7 6.781C7 4.141 9.141 2 11.781 2L12.219 2C14.859 2 17 4.141 17 6.781L17 13.219C17 15.859 14.859 18 12.219 18Z"/>
  <path d="M12 18L12 21"/>
  <path d="M10 8L7 8"/>
  <path d="M10 12L7 12"/>
  <path d="M17 8L14 8"/>
  <path d="M17 12L14 12"/>
  <path d="M7 22L17 22"/>
</svg>
