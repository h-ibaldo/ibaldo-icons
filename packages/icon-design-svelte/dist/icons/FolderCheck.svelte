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
  <path d="M10.999999978690539,20.999999999998181H3.999999944049705c-1.104569499659192,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500340808-2,2-2h3.929630589650515c.668705935499929,0,1.293168239900297.334201833509724,1.664099899289795.890598573469106l.812536329360228,1.218802853061788c.370931659379494.556396739959382.995393963779861.890598573469106,1.66409989927979.890598573469106h7.929633174780065c1.104569483929481,0,1.999999977750122.895430475789908,2,1.999999959721208l.000000100710167,5.000000040278792" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="21.999999978690539 16.999999999998181 17.999999978690539 21.999999999998181 14.999999978690539 18.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
