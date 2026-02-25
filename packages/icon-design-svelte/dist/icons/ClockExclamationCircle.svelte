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
  <polyline points="15 5.999999999887223 15 8.999999999887223 18 8.999999999887223" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.999998926759872" y1="13.999999999887223" x2="8.000000004849426" y2="14.999999999887223" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.999998926759872" y1="17.989999999887004" x2="8.000000004849426" y2="17.999999999887223" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="8.000000002427441" cy="16.000000002315119" r="5.99999999757506" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.995971679689319,15.919860839727335c.328735351560681.04736328125.662170410150793.080139160159888,1.004028320310681.080139160159888,3.865966796880457,0,7-3.134033203128638,7-7,0-3.866027832029431-3.134033203119543-7-7-7-3.865966796869543,0-7,3.133972167970569-7,7,0,.341857910159888.032775878909888.67529296875.080139160159888,1.004028320310681" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
