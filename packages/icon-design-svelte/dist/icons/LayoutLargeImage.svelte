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
  <rect x="12.000000000840657" y="7.998779295019602" width="1.999999999732154" height="1.999999995666315" rx=".999998992457853" ry=".999998992457853"/>
  <rect x="1.999999993602614" y="1.998779299956368" width="20" height="20" rx="1" ry="1"/>
  <rect x="4.999999993602614" y="4.998779299956368" width="14" height="14" rx="1" ry="1"/>
  <polyline points="5.499999993602614 18.498779299956368 10.999999993602614 12.998779299956368 13.999999993602614 15.498779299956368 18.999999993602614 9.998779299956368"/>
</svg>
