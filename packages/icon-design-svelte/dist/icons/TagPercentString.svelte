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
  <path d="M19.895 19L7.852 19C7.246 19 6.676 18.727 6.297 18.254L2.27 13.254C1.68 12.523 1.68 11.477 2.27 10.746L6.297 5.746C6.676 5.273 7.246 5 7.852 5L19.895 5C21 5 21.895 5.895 21.895 7L21.895 17C21.895 18.105 21 19 19.895 19Z"/>
  <path d="M7.895 13C7.344 13 6.895 12.551 6.895 12C6.895 11.449 7.344 11 7.895 11C8.445 11 8.895 11.449 8.895 12C8.895 12.551 8.445 13 7.895 13Z"/>
  <path d="M7.895 12L2.895 5"/>
  <path d="M13.066 9L13.066 9"/>
  <path d="M18.066 15L18.066 15"/>
  <path d="M13.066 15L18.066 9"/>
</svg>
