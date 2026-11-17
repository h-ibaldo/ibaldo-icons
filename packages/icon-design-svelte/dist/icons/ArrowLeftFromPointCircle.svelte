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
  <path d="M12 9L9 12L12 15"/>
  <path d="M18 12L9 12"/>
  <path d="M22 12L22 12"/>
  <path d="M19.117 5C17.305 3.152 14.793 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C14.793 22 17.305 20.848 19.117 19"/>
</svg>
