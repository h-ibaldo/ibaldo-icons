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
  <path d="M17.999999999210559,10.999999999643478V3.999999999643478c0-1.1046142578125-.8955078125-2-2-2H7.999999999210559c-1.1044921875,0-2,.8953857421875-2,2v7"/>
  <path d="M5.999999999210559,14.799987792612228v5.20001220703125c0,1.10455322265625.8955078125,2,2,2h8c1.1044921875,0,2-.89544677734375,2-2v-5.20001220703125"/>
  <polyline points="5.999999999210559 9.200012206674728 1.999999999210559 11.999999999643478 11.999999999210559 18.999999999643478 21.999999999210559 11.999999999643478 17.999999999210559 9.200012206674728"/>
  <polyline points="14.999999999210559 7.099975585580978 11.999999999210559 4.999999999643478 8.999999999210559 7.099975585580978"/>
</svg>
