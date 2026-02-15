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
  <path d="M19.000000026691851,8.999999999998181v-4c0-1.656854249490607-1.343145750508484-3-3-3h-7.999999999996362" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="5.000000026691851 5.752474922528563 5.000000026691851 21.999999999998181 12.000000026691851 17.999999999998181 19.000000026691851 21.999999999998181 19.000000026691851 13.349999999998545" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.000000026695488" y1="3.999999999998181" x2="22.000000026695488" y2="14.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
