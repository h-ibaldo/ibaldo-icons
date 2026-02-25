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
  <rect x="10.000000005000402" y="6.000000003886271" width="9" height="4" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000005000402" y="2.000000003886271" width="20" height="19.999999999997272" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.000000005000402" y1="8.000000003886271" x2="7.000000005000402" y2="8.000000003886271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="10.000000005000402" y="14.000000003886271" width="9" height="4" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.000000005000402" y1="16.000000003886271" x2="7.000000005000402" y2="16.000000003886271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
