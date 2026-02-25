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
  <path d="M6.999999990599463,10v-3c0-2.761420987731981,2.238574012270874-5,4.999995000000126-5l.000010000000657.000004999998055c2.761420987729252,0,4.999994999999217,2.238574012269964,4.999994999999217,4.999995000001945v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.999999990599463" cy="15" r="7.000000000000001" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.999999990599463" cy="14.999999999999091" r="2.999999999999545" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="12.999999990599463 12.1837158203125 12.999999990599463 14 14.816284170299696 14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
