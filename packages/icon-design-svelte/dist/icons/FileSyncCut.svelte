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
  <path d="M11 12L11 15L14 15"/>
  <path d="M21 22L21 19L18 19"/>
  <path d="M11.422 19C12.194 20.764 13.951 22 16 22C18.049 22 19.806 20.764 20.578 19"/>
  <path d="M20.569 15C19.796 13.238 18.048 12 16 12C13.951 12 12.194 13.236 11.422 15"/>
  <path d="M20 9L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L9 22"/>
</svg>
