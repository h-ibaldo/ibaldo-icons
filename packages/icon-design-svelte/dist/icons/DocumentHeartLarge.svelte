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
  <path d="M16 7L6 7"/>
  <path d="M8 12L6 12"/>
  <path d="M7 17L6 17"/>
  <path d="M11 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 8"/>
  <path d="M17.172 13L16.172 14L15.172 13C14.066 11.895 12.277 11.895 11.172 13C10.066 14.105 10.066 15.895 11.172 17L16.172 22L21.172 17C22.277 15.895 22.277 14.105 21.172 13C20.066 11.895 18.277 11.895 17.172 13Z"/>
</svg>
