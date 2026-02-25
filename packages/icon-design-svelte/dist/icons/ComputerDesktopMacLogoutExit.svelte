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
  <line x1="7.000000003159585" y1="21.998782736171052" x2="17.000000003159585" y2="21.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.000000003159585" y1="7.998782736171052" x2="8.000000003159585" y2="7.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.000000003159585" y1="13.998782736171052" x2="2.000000003159585" y2="13.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="14.000000003159585 5.998782736171052 16.000000003159585 7.998782736171052 14.000000003159585 9.998782736171052" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000003159585" y="1.998782736172871" width="20" height="14.999999999998181" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.000000003159585,21.998782736171052c1.380711874500776,0,2.5-1.119288125497405,2.5-2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.000000003159585,21.998782736116482c-1.380711874499866.000000000061846-2.500000000049113-1.119288125388266-2.500000000109139-2.499999999890861" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
