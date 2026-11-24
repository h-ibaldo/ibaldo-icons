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
  <path d="M8,14.999999999887223c-2.420349121090112,0-4.500549316409888,1.43603515625-5.44921875,3.5.948669433590112,2.06396484375,3.028869628909888,3.5,5.44921875,3.5s4.500549316409888-1.43603515625,5.44921875-3.5c-.948669433590112-2.06396484375-3.028869628909888-3.5-5.44921875-3.5Z"/>
  <circle cx="8" cy="18.499999999887223" r=".5"/>
  <path d="M17,20.651245117078361c2.986145019529431-1.729858398441138,5-4.952026367191138,5-8.651245117191138,0-5.522827148439319-4.477111816409888-10-10-10C6.477172851560681,1.999999999887223,2,6.477172851447904,2,11.999999999887223c0,.337646484371362.017822265630457.671020507810681.050476074220569,1"/>
</svg>
