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
  <path d="M12.999938941939035,13.999996563434252h8.000061035159888c.552307128911707,0,1-.44775390625,1-1v-2c0-.55230712890625-.447692871088293-1-1-1h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.999999977098923,9.999996563434252H2.999999977098923c-.552307128909888,0-1,.44769287109375-1,1v2c0,.55224609375.447692871090112,1,1,1h4.000061035161707" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="6.999999977098923" y="6.999996563434252" width="6" height="10" rx="2" ry="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
