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
  <circle cx="11.999999990790457" cy="12.000000000897671" r="10"/>
  <line x1="8.999999990919605" y1="15.000000000763976" x2="14.999999990650394" y2="9.000000001032276"/>
  <line x1="14.999999990519427" y1="15.000000000894943" x2="8.999999991059667" y2="9.000000000897671"/>
</svg>
