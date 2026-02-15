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
  <rect x="2.000000005000402" y="2.000000003886271" width="20" height="5" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000005000402" y="11.000000003886271" width="20" height="5" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="7.000000002616162" y="20.000000004948035" width="10" height="1.999999987357029" rx=".999998940923852" ry=".999998940923852" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
