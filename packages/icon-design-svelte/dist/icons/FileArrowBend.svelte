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
  <path d="M19 6L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L11 22"/>
  <path d="M9 2L9 7C9 7.552 8.552 8 8 8L3 8"/>
  <path d="M14 10L16 12L15.478 12.522C13.456 14.544 13.142 17.713 14.728 20.093L16 22L16 20.485C16 18.894 16.632 17.368 17.757 16.243L19 15L21 17L21 10L14 10Z"/>
</svg>
