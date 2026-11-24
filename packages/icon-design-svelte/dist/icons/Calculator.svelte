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
  <path d="M8 10L9 10"/>
  <path d="M8 13L9 13"/>
  <path d="M8 16L9 16"/>
  <path d="M8 19L9 19"/>
  <path d="M12 10L13 10"/>
  <path d="M12 13L13 13"/>
  <path d="M12 16L13 16"/>
  <path d="M12 19L13 19"/>
  <path d="M16 10L17 10"/>
  <path d="M16 13L17 13"/>
  <path d="M16 16L17 16L17 19L16 19Z"/>
  <path d="M8 6L17 6"/>
  <path d="M8 2L17 2C18.656 2 20 3.344 20 5L20 19C20 20.656 18.656 22 17 22L8 22C6.344 22 5 20.656 5 19L5 5C5 3.344 6.344 2 8 2Z"/>
</svg>
