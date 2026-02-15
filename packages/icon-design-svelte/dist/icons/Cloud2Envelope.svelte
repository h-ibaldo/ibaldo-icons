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
  <rect x="10.000000000020009" y="13.301707105238165" width="12" height="8.698292868270073" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.325256347679897,13.572764234148053l4.983572877110419,4.766210860849242c.386606835409111.369744707922109.995734715059371.369744707922109,1.382341550470301,0l4.9835728771086-4.766210860849242" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.000000000020009,8.999999999998181c0-2.209167480470569-1.790832519529431-4-4-4-.137084960939319,0-.266723632810681.02685546875-.400268554689319.040344238279431-.762390136711474-1.787048339839203-2.534118652340112-3.040344238279431-4.599731445310681-3.040344238279431-2.761413574220569,0-5,2.238586425779431-5,5,0,.137084960940228.029541015630457.265869140610448.040344238279431.400207519529431-1.787048339840112.762390136720569-3.040344238279431,2.5341796875-3.040344238279431,4.599792480470569,0,2.418884277340112,1.717834472659888,4.435852050779431,4,4.899230957029431" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
