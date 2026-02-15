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
  <path d="M22.000000003161404,20.301558373901571v1.69722436226948H2.000000003161404v-1.69722436226948c0-.197424985479302.058438027481316-.390432678937941.167949705660249-.554700196218619l1.832050294339751-2.748075441511901h16l1.832050294340661,2.748075441511901c.109511678190756.164267517280678.167949705659339.357275210739317.167949705659339.554700196218619Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.000000003161404,16.998782736171052V6.998782736171052c0-.552284749828686.447715250171314-1,1-1h1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="10.000000003161404" y="5.998782736171052" width="11" height="7" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.000000003161404,7.998782736171052l.000000107291271-2.999999952309736c.000000039499355-1.10456947172861.895430528260476-2.000000047690264,2-2.000000047690264h.999999940389898c1.104569481040016,0,1.999999854449925.895430471275176,1.999999880788891,1.999999952309736l.000000071529939,3.000000047690264" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
