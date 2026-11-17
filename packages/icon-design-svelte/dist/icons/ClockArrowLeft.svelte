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
  <line x1="10" y1="18.999999999708962" x2="2" y2="19.000000000069122"/>
  <polyline points="4.999999999869033 15.999999999938154 2 19.000000000069122 5.000000000130967 21.999999999938154"/>
  <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"/>
  <path d="M13,21.949462890508585c5.05322265625-.501831054680224,9-4.76416015625,9-9.949462890621362,0-5.522827148439319-4.477172851560681-10-10-10S2,6.477172851447904,2,11.999999999887223c0,.338012695310681.019287109380457.671264648441138.053833007810681,1"/>
</svg>
