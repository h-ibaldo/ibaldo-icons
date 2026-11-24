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
  <path d="M9.09 8.129C8.738 8.051 8.375 8 8 8C5.238 8 3 10.238 3 13C3 15.051 4.234 16.805 6 17.578L6 19L18 19L18 17.578C19.766 16.805 21 15.051 21 13C21 10.238 18.762 8 16 8C15.625 8 15.262 8.051 14.91 8.129"/>
  <path d="M13 3C13 3.551 12.555 4 12 4C11.445 4 11 3.551 11 3C11 2.449 11.445 2 12 2C12.555 2 13 2.449 13 3Z"/>
  <path d="M6 22L18 22"/>
  <path d="M16.926 14C16.973 13.676 17 13.34 17 13C17 9.688 14.762 7 12 7C9.238 7 7 9.688 7 13C7 13.34 7.027 13.676 7.074 14"/>
</svg>
