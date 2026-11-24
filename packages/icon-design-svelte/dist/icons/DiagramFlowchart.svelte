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
  <rect x="1.999999999994543" y="2" width="8" height="8"/>
  <rect x="13.999999999994543" y="14" width="8" height="8"/>
  <circle cx="17.999999999996817" cy="6" r="4.000000000001137"/>
  <line x1="9.999999999994543" y1="6" x2="13.999999999994543" y2="6"/>
  <line x1="9.999999999994543" y1="18" x2="13.999999999994543" y2="18"/>
  <rect x="3.171572875248353" y="15.17157287525381" width="5.65685424949238" height="5.656854249492381" transform="translate(-10.970562748478741 9.514718625757576) rotate(-45.000000000000014)"/>
  <line x1="5.999999999994543" y1="14" x2="5.999999999994543" y2="10"/>
</svg>
