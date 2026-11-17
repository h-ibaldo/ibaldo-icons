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
  <line x1="6.000000004160029" y1="5.999999996371116" x2="14.000000004160029" y2="5.999999996371116"/>
  <line x1="6.000000004160029" y1="13.999999996371116" x2="9.000000004160029" y2="13.999999996371116"/>
  <line x1="6.000000004160029" y1="17.999999996371116" x2="11.000000004160029" y2="17.999999996371116"/>
  <line x1="6.000000004160029" y1="9.999999996371116" x2="18.000000004160029" y2="9.999999996371116"/>
  <rect x="2.000000004160029" y="1.999999996371116" width="20" height="20" rx="2" ry="2"/>
</svg>
