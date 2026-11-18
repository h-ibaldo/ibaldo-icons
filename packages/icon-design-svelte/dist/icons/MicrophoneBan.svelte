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
  <path d="M8 18L8 22"/>
  <path d="M12 22L4 22"/>
  <path d="M20.535 10.465C18.582 8.512 15.418 8.512 13.465 10.465C11.512 12.418 11.512 15.582 13.465 17.535C15.418 19.488 18.582 19.488 20.535 17.535C22.488 15.582 22.488 12.418 20.535 10.465Z"/>
  <path d="M2 15C3.461 16.828 5.703 18 8.227 18C8.836 18 9.43 17.93 10 17.801"/>
  <path d="M12 7L12 6C12 3.789 10.211 2 8 2C5.789 2 4 3.789 4 6L4 10C4 12.211 5.789 14 8 14"/>
  <path d="M13.465 17.535L20.535 10.465"/>
</svg>
