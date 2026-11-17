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
  <rect x="7.000000005000402" y="3.000000003880814" width="14" height="18.000000000010914" rx="2" ry="2"/>
  <line x1="3.000000005000402" y1="4.000000003891728" x2="3.000000005000402" y2="20.000000003891728"/>
  <line x1="14.000000005000402" y1="8.000000003891728" x2="14.000000005000402" y2="12.000000003891728"/>
  <line x1="14.000000005000402" y1="16.010000003891946" x2="14.000000005000402" y2="16.000000003891728"/>
</svg>
