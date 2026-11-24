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
  <rect x="2.025268551144109" y="5.998779324585485" width="12.000000013759745" height="11.999999973355443" rx=".999999999993439" ry=".999999999993439"/>
  <line x1="18.025268569828768" y1="11.998779303612537" x2="22.025268569828768" y2="11.998779303612537"/>
  <polyline points="6.025268561499615 11.99877929957438 7.525268569828768 13.498779303612537 10.025268561488701 10.498779303612537"/>
</svg>
