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
  <path d="M3 13L3 19C3 20.105 3.895 21 5 21L19 21C20.105 21 21 20.105 21 19L21 13"/>
  <path d="M7 16L17 16"/>
  <path d="M7 12L17 12"/>
  <path d="M7 8L17 8"/>
  <path d="M7 4L17 4"/>
</svg>
