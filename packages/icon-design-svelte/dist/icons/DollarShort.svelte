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
  <path d="M12 2L12 5"/>
  <path d="M12 19L12 22"/>
  <path d="M16 9L16 8C16 6.344 14.656 5 13 5L10.953 5C9.297 5 7.953 6.344 7.953 8L7.953 8.141C7.953 9.281 8.598 10.32 9.617 10.828L14.336 13.172C15.355 13.68 16 14.719 16 15.859L16 16C16 17.656 14.656 19 13 19L11 19C9.344 19 8 17.656 8 16L8 15"/>
</svg>
