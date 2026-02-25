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
  <g>
  <circle cx="6.5" cy="17.499999999887223" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.682006835939319" y1="14.317993163947904" x2="3.317993164060681" y2="20.682006835828361" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <polyline points="13 5.999999999887223 13 10.999999999887223 18 10.999999999887223" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.448608398439319,19.615905761607792c.809936523430224.242065429689319,1.662658691400793.384094238279431,2.551391601560681.384094238279431,4.970520019529431,0,9-4.02947998046875,9-9,0-4.970642089840112-4.029479980470569-9-9-9S4,6.029357910047111,4,10.999999999887223c0,.888732910159888.142028808590112,1.741455078121362.384094238279431,2.551391601560681" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
