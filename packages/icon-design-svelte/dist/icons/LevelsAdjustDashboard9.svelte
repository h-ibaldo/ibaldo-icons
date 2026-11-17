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
  <line x1="16.999999990797733" y1="10.999999999778083" x2="16.999999990085598" y2="21.999999999770807"/>
  <line x1="16.999999990354809" y1="1.999999999778083" x2="16.999999990220203" y2="5.999999999778083"/>
  <rect x="14.499999990797733" y="4.499999999778083" width="5" height="8" rx="1" ry="1" transform="translate(25.499999990575816 -8.499999991019649) rotate(90)"/>
  <line x1="6.999999991067853" y1="12.999999999959982" x2="6.999999992860467" y2="1.999999999778083"/>
  <line x1="6.999999990793185" y1="21.999999999770807" x2="6.999999991196091" y2="17.999999999959982"/>
  <rect x="4.499999990845424" y="11.499999999955875" width="4.999999999994543" height="8.000000000000028" rx=".999999999998931" ry=".999999999998931" transform="translate(-8.500000009739177 22.49999998941248) rotate(-89.999999994876262)"/>
</svg>
