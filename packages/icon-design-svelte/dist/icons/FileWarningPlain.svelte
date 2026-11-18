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
  <path d="M18 8L18 4C18 2.895 17.105 2 16 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L5 22"/>
  <path d="M15 15L15 16"/>
  <path d="M15 19L15 19"/>
  <path d="M10.446 22L19.554 22C21.089 22 22.052 20.341 21.29 19.008L17.134 11.734C16.19 10.083 13.81 10.083 12.866 11.734L8.71 19.008C7.948 20.341 8.911 22 10.446 22Z"/>
</svg>
