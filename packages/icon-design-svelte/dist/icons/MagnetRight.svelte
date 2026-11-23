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
  <path d="M17 22L17 15"/>
  <path d="M17 9L17 2"/>
  <path d="M22 22L12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2L22 2L22 9L12 9C10.344 9 9 10.344 9 12C9 13.656 10.344 15 12 15L22 15Z"/>
</svg>
