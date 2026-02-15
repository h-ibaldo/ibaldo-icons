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
  <rect x="2.00000000018008" y="2.00000000044929" width="20" height="20" rx="1.999999999999977" ry="1.999999999999977" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="6.010000000180298" y1="6.000000000448381" x2="6.00000000018008" y2="6.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.010000000180298" y1="6.000000000448381" x2="9.00000000018008" y2="6.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.010000000180298" y1="6.000000000448381" x2="12.00000000018008" y2="6.000000000448381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
