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
  <rect x="2.000000000224645" y="2.032754075946286" width="20" height="20" rx="3" ry="3"/>
  <g>
  <path d="M9.000000000224645,10.032754075946286v-.171575701362599c0-1.562095606186631,1.266328692448042-2.828424298637401,2.828424298635582-2.828424298637401h.343151399451926c1.562095603097987,0,2.82842429426546,1.266328687630448,2.828424298636492,2.828424290728435v.000004000001354c.000000002096385.750144767000165-.297993845378187,1.469565557930764-.828426297000078,1.999998009538103l-2.171573699723922,2.171573699732107"/>
  <line x1="12.000000000224645" y1="17.042754075946505" x2="12.000000000224645" y2="17.032754075946286"/>
  </g>
</svg>
