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
  <path d="M15 15L12 12L15 9"/>
  <path d="M22 12L12 12"/>
  <path d="M5 15C6.656 15 8 13.656 8 12C8 10.344 6.656 9 5 9C3.344 9 2 10.344 2 12C2 13.656 3.344 15 5 15Z"/>
</svg>
