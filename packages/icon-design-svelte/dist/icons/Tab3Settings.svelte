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
  <polygon points="22.000000004678441 21.999999999999091 2.000000004678441 21.999999999999091 2.000000004678441 1.999999999999091 10.000000004678441 1.999999999999091 13.000000004678441 5.999999999999091 22.000000004678441 5.999999999999091 22.000000004678441 21.999999999999091"/>
  <polyline points="15.000000004678441 1.999999999999091 22.000000004678441 1.999999999999091 22.000000004678441 5.999999999999091"/>
  <line x1="8.000000004678441" y1="14.009999999999309" x2="8.000000004678441" y2="13.999999999999091"/>
  <line x1="12.000000004678441" y1="14.009999999999309" x2="12.000000004678441" y2="13.999999999999091"/>
  <line x1="16.000000004678441" y1="14.009999999999309" x2="16.000000004678441" y2="13.999999999999091"/>
</svg>
