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
  <path d="M9.004 2.98L3.004 2.98L3.004 8.98"/>
  <path d="M11.004 10.98L3.004 2.98"/>
  <path d="M13 6L19 6C20.105 6 21 6.895 21 8L21 19C21 20.105 20.105 21 19 21L8 21C6.895 21 6 20.105 6 19L6 13"/>
</svg>
