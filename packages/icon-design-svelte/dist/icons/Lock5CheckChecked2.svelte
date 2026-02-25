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
  <path d="M5.949462885141656,10.000000000480213v-3c0-2.761420987731981,2.238574012269964-5,4.999995000000126-5l.000010000000657.000004999998055c2.761420987728343,0,4.999994999999217,2.238574012269964,4.999994999999217,4.999995000001945v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.949462885141656,15.000000000480213c0-3.86602783203125-3.134033203125-7-7-7s-7,3.13397216796875-7,7c0,3.865966796875,3.134033203125,7,7,7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
