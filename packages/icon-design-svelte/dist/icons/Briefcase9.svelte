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
  <rect x="2" y="6.999999999998181" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2,11.999999999998181l1.055728090001139.52786404499966c5.630549813338803,2.815274906670311,12.257994006668014,2.815274906670311,17.888543820008636,0l1.055728089990225-.52786404499966" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
