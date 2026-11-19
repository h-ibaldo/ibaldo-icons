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
  <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12"/>
  <path d="M15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5Z"/>
  <path d="M12 8L12 22"/>
  <path d="M2 12L6 14"/>
  <path d="M18 14L22 12"/>
</svg>
