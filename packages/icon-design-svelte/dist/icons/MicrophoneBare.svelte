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
  <path d="M12 15C9.789 15 8 13.211 8 11L8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6L16 11C16 13.211 14.211 15 12 15Z"/>
  <path d="M12 19L12 22"/>
  <path d="M5.094 15C6.473 17.387 9.043 19 12 19C14.957 19 17.527 17.387 18.906 15"/>
</svg>
