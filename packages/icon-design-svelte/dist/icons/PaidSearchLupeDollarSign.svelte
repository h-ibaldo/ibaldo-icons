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
    <path d="M6.499999993602614,5.332092288237618l-.581115722659888-.38739013671875c-.825012207020336-.54998779296875-1.923583984369543-.44122314453125-2.62469482421875.2598876953125l-.000061035150793.00006103515625c-.928161621099207.92816162109375-.775146484380457,2.47344970703125.317016601560681,3.20159912109375l1.777709960939319,1.18505859375c1.092163085939319.7281494140625,1.245178222650793,2.2734375.317016601560681,3.20159912109375l-.000061035159888.00006103515625c-.701110839840112.70111083984375-1.799682617180224.80987548828125-2.624694824211474.2598876953125l-.581115722659888-.38739013671875" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="4.499999993602614" y1="2.998779299956368" x2="4.499999993602614" y2="4.616577151518868" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="4.499999993522579" y1="14.99877929995273" x2="4.499999993522579" y2="13.38098144839023" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <circle cx="15.999999993602614" cy="12.498779299956368" r="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.110900872512502" y1="16.387878421050118" x2="7.499999993602614" y2="20.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
