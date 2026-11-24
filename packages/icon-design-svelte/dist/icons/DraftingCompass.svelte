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
  <path d="M9 7C9 5.344 10.344 4 12 4C13.656 4 15 5.344 15 7C15 8.656 13.656 10 12 10C10.344 10 9 8.656 9 7Z"/>
  <path d="M12 2L12 4"/>
  <path d="M4 22L10.59 9.648"/>
  <path d="M13.41 9.648L20 22"/>
  <path d="M4 16L20 16"/>
  <path d="M12 14L12 18"/>
</svg>
