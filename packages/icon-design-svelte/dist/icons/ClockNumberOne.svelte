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
  <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223"/>
  <polyline points="3 14.999999999887223 4 14.999999999887223 4 21.999999999887223"/>
  <path d="M9,21.540771484258585c.947265625.297607421878638,1.95458984375.459228515628638,3,.459228515628638,5.52294921875,0,10-4.477172851558862,10-10,0-5.522827148439319-4.47705078125-10-10-10C7.162475585939319,1.999999999887223,3.131103515619543,5.436157226447904,2.204223632810681,9.999999999887223"/>
</svg>
