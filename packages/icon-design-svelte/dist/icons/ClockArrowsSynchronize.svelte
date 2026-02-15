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
  <polyline points="15 5.999999999869033 15 8.999999999869033 18 8.999999999887223" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <polyline points="1.999999999770807 12.000000000118234 1.999999999909051 15.000000000109139 4.999999999909051 14.999999999978172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="13.00000000018008 20.999999999618012 13.000000000050932 17.999999999618012 10.000000000050932 17.999999999758074" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.422119140530413,15.000000000098225c.772216796798602-1.76440429691138,2.528686523310171-3.000000000120053,4.577880859240395-3.000000000211003,1.630493164069776-.000000000069122,3.064636230508768.792236327990395,3.977355957129475,1.999999999821739" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.899230957080363,17.999999999668944c-.463378906149956,2.282165527358302-2.480346679511058,4.000000000109139-4.899230956860265,4.000000000218279-2.047790527340112.000000000090949-3.796447753959001-1.237548827950377-4.569335937629148-2.999999999788997" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M17,15.706298827988576c2.890869140630457-.861022949220569,5-3.535827636720569,5-6.706298828119543,0-3.865966796880457-3.134033203119543-7-7-7-3.525512695310681,0-6.43408203125,2.609008789058862-6.92041015625,6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
