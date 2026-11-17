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
  <polyline points="20.016630450567391 22.000000000389264 20.016630451375022 4.000000000389264 15.016630451375022 4.000000000170985 15.016630451153105 9.000000000170985 10.016630451153105 8.999999999938154 10.016630450927551 13.999999999938154 5.016630450927551 13.999999999719876 5.016630450567391 21.999999999719876"/>
  <line x1="2.516630450567391" y1="21.999999999628926" x2="21.516630450567391" y2="22.000000000480213"/>
  <line x1="15.016630451153105" y1="9.000000000170985" x2="15.016630450567391" y2="22.000000000170985"/>
  <line x1="10.016630450927551" y1="13.999999999938154" x2="10.016630450567391" y2="21.999999999938154"/>
</svg>
