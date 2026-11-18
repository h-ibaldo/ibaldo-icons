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
  <path d="M11.805 12C9.594 12 7.805 10.211 7.805 8C7.805 5.789 9.594 4 11.805 4C14.012 4 15.805 5.789 15.805 8C15.805 10.211 14.012 12 11.805 12Z"/>
  <path d="M11.805 2L11.805 4"/>
  <path d="M11.805 12L11.805 14"/>
  <path d="M17 5L15.27 6"/>
  <path d="M8.34 10L6.609 11"/>
  <path d="M17 11L15.27 10"/>
  <path d="M8.34 6L6.609 5"/>
  <path d="M2.805 7.531C2.168 8.582 1.805 9.754 1.805 11C1.805 13.84 3.66 16.328 6.449 17.75C6.469 18.895 6.195 20.078 5.523 21.113C5.285 21.48 5.566 21.973 6 21.898C8.117 21.535 9.586 20.23 10.52 18.926C10.941 18.969 11.367 19 11.805 19C17.328 19 21.805 15.418 21.805 11C21.805 9.754 21.438 8.582 20.805 7.531"/>
</svg>
