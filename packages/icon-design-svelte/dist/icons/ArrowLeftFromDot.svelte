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
  <path d="M5 15L2 12L5 9"/>
  <path d="M12 12L2 12"/>
  <path d="M19 9C17.344 9 16 10.344 16 12C16 13.656 17.344 15 19 15C20.656 15 22 13.656 22 12C22 10.344 20.656 9 19 9Z"/>
</svg>
