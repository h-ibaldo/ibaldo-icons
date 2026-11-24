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
  <path d="M6 9L3 12L6 15"/>
  <path d="M15 12L3 12"/>
  <path d="M3.02 18C4.844 20.426 7.73 22 11 22C16.523 22 21 17.523 21 12C21 6.477 16.523 2 11 2C7.73 2 4.844 3.574 3.02 6"/>
</svg>
