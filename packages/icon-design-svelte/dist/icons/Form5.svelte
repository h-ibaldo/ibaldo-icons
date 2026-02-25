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
  <rect x="9.000000005000402" y="2.000000003886271" width="13" height="4" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000005000402" y1="4.000000003886271" x2="6.000000005000402" y2="4.000000003886271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="9.000000005000402" y="10.000000003886271" width="13" height="4" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000004999492" y="18.000000003572495" width="4" height="4" rx="1.000000000001819" ry="1.000000000001819" transform="translate(8.000000008179999 40.000000007508788) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000005000402" y1="12.000000003886271" x2="6.000000005000402" y2="12.000000003886271" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.000000005000402" y1="20.000000004381945" x2="9.000000005000402" y2="20.000000004022695" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
