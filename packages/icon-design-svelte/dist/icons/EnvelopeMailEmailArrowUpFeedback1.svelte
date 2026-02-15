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
  <path d="M22.000000000224645,9.032754075946286v12c0,.552284749828686-.447715250169495,1-1,1H3.000000000224645c-.552284749829596,0-1-.447715250171314-1-1v-12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.000000000224645,9.032754075946286l9.426537655635002,6.598576358948776c.344320151393731.2410241059697.802604537336265.2410241059697,1.146924688728177,0l9.426537655636821-6.598576358948776" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.999999999821739,9.032754076844867L12.573462344940708,2.434177717044804c-.344320151370084-.241024106009718-.802604537298066-.241024106038822-1.146924688714535-.000000000098225L1.999999999821739,9.032754075044068" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="15.000000000224645 10.032754075946286 12.00000000063028 7.032754075946286 9.000000000224645 10.032754075946286" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.000000000224645" y1="15.032754075946286" x2="12.000000000224645" y2="7.032754076844867" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
