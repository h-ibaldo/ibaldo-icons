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
  <line x1="18.00000000376167" y1="11.999999998985004" x2="22.00000000376167" y2="11.999999998985004"/>
  <circle cx="8.00000000376167" cy="11.999999998985004" r="6"/>
  <polyline points="6.00000000376167 11.999999998985004 7.50000000376167 13.499999998985004 10.00000000376167 10.999999998985004"/>
</svg>
