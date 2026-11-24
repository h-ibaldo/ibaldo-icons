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
  <rect x="2" y="17.999999999887223" width="7" height="4"/>
  <path d="M13,21.949462890508585c5.053283691409888-.501831054680224,9-4.76416015625,9-9.949462890621362,0-5.522827148439319-4.477111816409888-10-10-10C7.162170410159888,1.999999999887223,3.127502441409888,5.435546874887223,2.200866699220569,9.999999999887223"/>
  <path d="M7.4892578125,13.999999999887223c-.456237792970569-.604248046878638-1.173706054689319-1-1.9892578125-1-1.380676269529431,0-2.5,1.119262695310681-2.5,2.5v2.5"/>
</svg>
