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
  <polyline points="11.000000000220098 13.00000000071941 11.000000000220098 16.000000000717591 14.000000000220098 16.000000000717591" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.100769043190667,16.00000000071941c.46337890625-2.28216552734375,2.480346679689319-4,4.899230957029431-4,2.761413574220569,0,5,2.23858642578125,5,5s-2.238586425779431,5-5,5c-1.630493164060681,0-3.064636230470569-.792236328125-3.977355957029431-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.000000000220098,22.00000000071941h-5c-1.104569499659192,0-2-.89543050033717-2-2V6.000000000721229" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.000000000251021" y1="6.000000000721229" x2="15.000000000251021" y2="9.00000000071941" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000000220098" y1="6.000000000721229" x2="17.000000000251021" y2="6.000000000721229" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.000000000251021" y1="2.00000000071941" x2="12.000000000251021" y2="2.00000000071941" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
