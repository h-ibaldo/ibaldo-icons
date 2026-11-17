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
  <rect x="11.025268639606793" y="10.999996551712044" width="1.999999978512733" height="1.999999921422985" rx=".999402538453914" ry=".999402538453914" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="11.025268639606679" y="1.999996564256747" width="1.99999997851296" height="1.999999921421535" rx=".999402538466265" ry=".999402538466265" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="11.025268639606793" y="19.999996485710795" width="1.999999978512733" height="1.999999921455412" rx=".999402538456675" ry=".999402538456675" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
