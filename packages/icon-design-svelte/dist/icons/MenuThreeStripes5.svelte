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
  <rect x="2" y="2.000000076632091" width="20" height="3.999999993410484" rx="1.999998018237277" ry="1.999998018237277" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2" y="10.000000075584353" width="20" height="3.999999995505959" rx="1.999998032602977" ry="1.999998032602977" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2" y="18.000000081987196" width="20" height="3.999999982700274" rx="1.999998009715652" ry="1.999998009715652" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
