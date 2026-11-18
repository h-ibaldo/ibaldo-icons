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
  <path d="M15 22L9 22C5.688 22 3 19.313 3 16L3 8C3 4.688 5.688 2 9 2L15 2C18.313 2 21 4.688 21 8L21 16C21 19.313 18.313 22 15 22Z"/>
  <path d="M12 5L12 19"/>
  <path d="M8 8.5L12 12L16 8.5L12 5"/>
  <path d="M12 19L16 15.5L12 12L8 15.5"/>
</svg>
