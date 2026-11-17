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
  <polyline points="16.999999999539796 1.999999999728971 19.999999999679858 4.999999999599822 16.999999999809916 7.999999999728971"/>
  <path d="M2.000000000650289,13.000000000229193l-.000000000040018-1c-.000000000170076-3.865993248818995,3.134006750879962-7.000000000140062,6.999999999689862-7.000000000320142l10.999999999379725-.000000000309228"/>
  <polyline points="7.000000001060471 22 4.000000000920409 19.000000000138243 7.000000000800355 16"/>
  <path d="M21.999999999939973,10.999999999508873l.000000000060027,1c.000000000160071,3.865993248820814-3.134006750879962,7.000000000140062-6.999999999699867,7.000000000309228l-10.999999999379725.000000000320142"/>
</svg>
