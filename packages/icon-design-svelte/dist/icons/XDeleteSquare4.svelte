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
  <rect x="3.999999990779543" y="4.000000000448381" width="16" height="16" rx="3" ry="3"/>
  <line x1="9.999999990870492" y1="14.000000000357431" x2="13.999999990690412" y2="10.000000000538421"/>
  <line x1="13.999999990590368" y1="14.000000000446562" x2="9.999999990959623" y2="10.000000000448381"/>
</svg>
