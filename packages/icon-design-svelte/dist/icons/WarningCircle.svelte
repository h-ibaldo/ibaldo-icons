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
  <circle cx="12.000000005000402" cy="12.000000003886953" r="8.000000000000341"/>
  <line x1="12.000000005000402" y1="15.010000003887399" x2="12.000000005000402" y2="15.000000003886271"/>
  <line x1="12.000000005000402" y1="9.000000003886271" x2="12.000000005000402" y2="12.000000003886271"/>
</svg>
