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
  <path d="M11.5,16.999999999887223h-.5c0-1.656860351558862-1.343139648440228-3-3-3s-3,1.343139648441138-3,3h-.5c-1.380737304690228,0-2.5,1.119262695301586-2.5,2.5,0,1.380737304691138,1.119262695309772,2.5,2.5,2.5h7c1.380737304690228,0,2.5-1.119262695308862,2.5-2.5,0-1.380737304698414-1.119262695309772-2.5-2.5-2.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16,15.920410156137223c3.391052246090112-.486328125,6-3.394897460939319,6-6.92041015625,0-3.865966796878638-3.133972167969659-7-7-7-3.865966796869543,0-7,3.134033203121362-7,7,0,.695556640621362.104858398440228,1.365966796871362.293701171880457,2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
