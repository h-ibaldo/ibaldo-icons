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
  <path d="M12 14L8.586 10.586C8.211 10.211 7.703 10 7.172 10L5 10C3.895 10 3 10.895 3 12L3 16C3 16.551 3.449 17 4 17L5 17L5 22"/>
  <path d="M6.5 7C5.117 7 4 5.883 4 4.5C4 3.117 5.117 2 6.5 2C7.883 2 9 3.117 9 4.5C9 5.883 7.883 7 6.5 7Z"/>
  <path d="M9 18L9 22"/>
  <path d="M12 14L15.414 10.586C15.789 10.211 16.297 10 16.828 10L19 10C20.105 10 21 10.895 21 12L21 16C21 16.551 20.551 17 20 17L19 17L19 22"/>
  <path d="M17.5 7C18.883 7 20 5.883 20 4.5C20 3.117 18.883 2 17.5 2C16.117 2 15 3.117 15 4.5C15 5.883 16.117 7 17.5 7Z"/>
  <path d="M15 18L15 22"/>
</svg>
