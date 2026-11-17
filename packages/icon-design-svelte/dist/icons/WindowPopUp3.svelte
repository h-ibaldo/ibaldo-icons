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
  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
  <line x1="2" y1="8" x2="22" y2="8"/>
  <line x1="5.010000000000218" y1="5" x2="5" y2="5"/>
  <line x1="8.010000000000218" y1="5" x2="8" y2="5"/>
  <line x1="11.010000000000218" y1="5" x2="11" y2="5"/>
  <rect x="9" y="12" width="10" height="7" rx=".853912563829908" ry=".853912563829908"/>
</svg>
