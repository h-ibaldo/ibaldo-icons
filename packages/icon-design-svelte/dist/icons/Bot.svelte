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
  <path d="M8 12L9 12L9 15L8 15Z"/>
  <path d="M15 12L16 12L16 15L15 15Z"/>
  <path d="M6.684 8.332L7.172 8.211C10.355 7.414 13.688 7.418 16.871 8.215L16.988 8.246C18.824 8.707 20.227 10.188 20.586 12.051C20.859 13.477 20.848 14.945 20.551 16.371C20.215 17.98 18.988 19.258 17.395 19.66L16.957 19.77C13.773 20.578 10.441 20.59 7.254 19.801L6.941 19.727C5.148 19.281 3.773 17.84 3.422 16.027C3.145 14.598 3.152 13.133 3.445 11.707C3.785 10.055 5.043 8.738 6.684 8.332Z"/>
  <path d="M3.414 16L2 16L2 12L3.387 12"/>
  <path d="M20.586 12.051C20.582 12.031 20.578 12.016 20.574 12L22 12L22 16L20.621 16"/>
  <path d="M12 7L12 3"/>
  <path d="M11 3C11 2.449 11.449 2 12 2C12.551 2 13 2.449 13 3C13 3.551 12.551 4 12 4C11.449 4 11 3.551 11 3Z"/>
</svg>
