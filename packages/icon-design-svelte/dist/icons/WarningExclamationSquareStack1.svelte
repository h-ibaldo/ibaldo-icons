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
  <rect x="2.000000005000402" y="2.000000003886271" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.000000005000402,9.000000003886271v10c0,1.656854249493335-1.343145750510303,3-3,3h-10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.000000005000402" y1="13.010000003887399" x2="10.000000005000402" y2="13.000000003886271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.000000005000402" y1="7.000000003886271" x2="10.000000005000402" y2="10.000000003886271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
