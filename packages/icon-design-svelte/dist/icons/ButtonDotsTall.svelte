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
  <rect x="1.999999990799552" y="7.000000000448381" width="20" height="10" rx="2" ry="2"/>
  <line x1="7.999999990799552" y1="12.010000000450418" x2="7.999999990799552" y2="12.0000000004502"/>
  <line x1="11.999999990799552" y1="12.010000000450418" x2="11.999999990799552" y2="12.0000000004502"/>
  <line x1="15.999999990799552" y1="12.010000000450418" x2="15.999999990799552" y2="12.0000000004502"/>
</svg>
