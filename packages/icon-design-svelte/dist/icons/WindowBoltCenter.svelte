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
  <rect x="2.00000000018008" y="2.000000000448381" width="20" height="20" rx="2" ry="2"/>
  <line x1="2.00000000018008" y1="8.000000000448381" x2="22.00000000018008" y2="8.000000000448381"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381"/>
  <polyline points="12.00000000018008 15.000000000448381 12.00000000018008 19.000000000448381 15.00000000018008 15.000000000448381 9.00000000018008 15.000000000448381 12.00000000018008 11.000000000448381 12.00000000018008 15.000000000448381"/>
</svg>
