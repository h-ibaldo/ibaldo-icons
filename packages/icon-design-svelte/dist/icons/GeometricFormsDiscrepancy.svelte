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
  <rect x="2.00000000018008" y="2.000000000446562" width="20" height="20"/>
  <polygon points="10.00000000018008 13.000000000448381 12.00000000018008 10.000000000448381 14.00000000018008 13.000000000448381 10.00000000018008 13.000000000448381"/>
  <polygon points="8.50000000018008 18.000000000448381 15.50000000018008 18.000000000448381 19.00000000018008 12.000000000448381 15.50000000018008 6.000000000448381 8.50000000018008 6.000000000448381 5.00000000018008 12.000000000448381 8.50000000018008 18.000000000448381"/>
</svg>
