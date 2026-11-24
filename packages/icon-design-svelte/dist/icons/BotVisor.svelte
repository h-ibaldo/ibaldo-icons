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
  <path d="M2 11.977L2 16.023C2 17.789 3.16 19.348 4.852 19.855L6.254 20.277C10 21.402 14 21.402 17.746 20.277L19.148 19.855C20.84 19.348 22 17.789 22 16.023L22 11.977C22 10.211 20.84 8.652 19.148 8.145L17.746 7.723C14 6.598 10 6.598 6.254 7.723L4.852 8.145C3.16 8.652 2 10.211 2 11.977Z"/>
  <path d="M8 11L16 11C17.656 11 19 12.344 19 14C19 15.656 17.656 17 16 17L8 17C6.344 17 5 15.656 5 14C5 12.344 6.344 11 8 11Z"/>
  <path d="M8 14L9 14"/>
  <path d="M15 14L16 14"/>
  <path d="M12 6.883L12 3"/>
  <path d="M11 3C11 2.449 11.449 2 12 2C12.551 2 13 2.449 13 3C13 3.551 12.551 4 12 4C11.449 4 11 3.551 11 3Z"/>
</svg>
