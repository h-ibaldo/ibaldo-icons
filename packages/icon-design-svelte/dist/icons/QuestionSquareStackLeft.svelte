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
  <rect x="7.000000000224645" y="3.032754075935372" width="14" height="18.000000000021828" rx="2" ry="2"/>
  <line x1="3.000000000224645" y1="4.0327540759572" x2="3.000000000224645" y2="20.0327540759572"/>
  <g>
  <path d="M12.000000000224645,10.032754075946286v-.000002000000677c0-1.104568403690791.895429604908713-1.999997999999323,1.999998000000232-1.999997999999323h.000004000004992c1.104568395079696,0,1.99999799998659.895429604897799,1.999997999990228,1.999997999977495v.00000300001193c.000000000003638.640288606449758-.25435365854446,1.254352658561402-.707106074087278,1.707105074099672l-1.292893925908174,1.292893925910903"/>
  <line x1="14.000000000224645" y1="16.042754075946505" x2="14.000000000224645" y2="16.032754075946286"/>
  </g>
</svg>
