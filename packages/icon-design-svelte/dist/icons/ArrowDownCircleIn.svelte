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
  <path d="M9 12L12 15L15 12"/>
  <path d="M12 2L12 15"/>
  <path d="M17 3.352C19.984 5.082 22 8.301 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 8.301 4.016 5.082 7 3.352"/>
</svg>
