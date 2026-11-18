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
  <path d="M9 5L12 2L15 5"/>
  <path d="M12 11L12 2"/>
  <path d="M12 15L12 15"/>
  <path d="M5 4.883C3.152 6.695 2 9.207 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 9.207 20.848 6.695 19 4.883"/>
</svg>
