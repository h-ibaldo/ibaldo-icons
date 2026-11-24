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
  <path d="M15 2.98L21 2.98L21 8.98"/>
  <path d="M13 10.98L21 2.98"/>
  <path d="M11.004 6L5.004 6C3.898 6 3.004 6.895 3.004 8L3.004 19C3.004 20.105 3.898 21 5.004 21L16.004 21C17.109 21 18.004 20.105 18.004 19L18.004 13"/>
</svg>
