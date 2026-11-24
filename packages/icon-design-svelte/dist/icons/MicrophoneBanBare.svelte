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
  <path d="M9 19L9 22"/>
  <path d="M13 7L13 6C13 3.789 11.211 2 9 2C6.789 2 5 3.789 5 6L5 11C5 13.211 6.789 15 9 15"/>
  <path d="M2 15C3.383 17.387 5.949 19 8.906 19C9.277 19 9.645 18.977 10 18.926"/>
  <path d="M20.535 10.465C18.582 8.512 15.418 8.512 13.465 10.465C11.512 12.418 11.512 15.582 13.465 17.535C15.418 19.488 18.582 19.488 20.535 17.535C22.488 15.582 22.488 12.418 20.535 10.465Z"/>
  <path d="M13.465 17.535L20.535 10.465"/>
</svg>
