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
  <path d="M22 7.5C22 10.535 19.539 13 16.5 13C13.461 13 11 10.535 11 7.5C11 4.465 13.461 2 16.5 2C19.539 2 22 4.465 22 7.5Z"/>
  <path d="M12.258 4L9 4C5.133 4 2 7.133 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C18.867 18 22 14.867 22 11C22 10.367 21.895 9.762 21.734 9.18"/>
  <path d="M14.75 9.25L18.25 5.75"/>
  <path d="M18.25 9.25L14.75 5.75"/>
</svg>
