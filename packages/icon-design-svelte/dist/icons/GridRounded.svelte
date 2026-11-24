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
  <rect x="2.000000005000402" y="2.000000003888999" width="7" height="6.999999999997272" rx="2" ry="2"/>
  <rect x="15.000000005000402" y="2.000000003888999" width="7" height="6.999999999997272" rx="2" ry="2"/>
  <rect x="2.000000005000402" y="15.000000003886271" width="7" height="7" rx="2" ry="2"/>
  <rect x="15.000000005000402" y="15.000000003886271" width="7" height="7" rx="2" ry="2"/>
</svg>
