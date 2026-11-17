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
  <rect x="7.000000002679371" y="3.000000016811057" width="10.00000000894579" height="17.999999999999972" rx="1.999999999989018" ry="1.999999999989018" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="11.000000001149601 2.999999998068233 11.000000001060471 3.999999998068233 13.000000001060471 3.999999998606654 13.000000001149601 2.999999998606654" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.999999999210559,6.999999999643478c.552284749828686,0,1,.447715250167676,1,1v7c0,.552284749828686-.447715250171314,1-1,1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.999999998810381,15.99999999963984c-.552284749830505-.000000000050932-.999999999959982-.447715250258625-.99999999991087-1.000000000090949l.000000000631189-7c.000000000049113-.552284749828686.447715250258625-.999999999959982,1.00000000008913-.999999999909051" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
