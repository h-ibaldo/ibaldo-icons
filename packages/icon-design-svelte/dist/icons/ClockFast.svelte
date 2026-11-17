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
  <path d="M2 14L8 14"/>
  <path d="M6 22L8 22"/>
  <path d="M4 18L8 18"/>
  <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C7.16 2 3.129 5.438 2.199 10"/>
  <path d="M12 7L12 12L17 12"/>
</svg>
