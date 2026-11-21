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
  <path d="M2 16L5 16L7.82 18.82C8.543 19.543 9.613 19.797 10.582 19.473L11.395 19.203C11.793 19.07 12.152 18.848 12.449 18.551L14 17L14.586 17C15.492 17 16.359 16.641 17 16C17.535 15.465 17.496 14.582 16.914 14.094L12 10L10.461 11.539C9.652 12.348 8.348 12.348 7.539 11.539L7 11L10.875 6.348C11.535 5.559 12.648 5.324 13.57 5.785L18 8L22 8"/>
</svg>
