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
  <polyline points="2 2 2 22 22 22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="22.000000000320142 17.99999999963984 19.000000000050932 11.999999999770807 17.00000000018008 14.999999999869033 13.999999999909051 9 10.000000000090949 13.000000000178261 5.999999999690772 4.00000000036016" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
