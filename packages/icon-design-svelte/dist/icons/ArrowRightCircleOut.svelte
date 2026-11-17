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
  <path d="M18 9L21 12L18 15"/>
  <path d="M9 12L21 12"/>
  <path d="M20.98 18C19.156 20.426 16.27 22 13 22C7.477 22 3 17.523 3 12C3 6.477 7.477 2 13 2C16.27 2 19.156 3.574 20.98 6"/>
</svg>
