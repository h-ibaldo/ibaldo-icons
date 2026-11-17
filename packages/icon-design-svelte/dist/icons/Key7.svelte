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
  <circle cx="6.000019575949409" cy="12.000015258789062" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.000019575949409" y1="12.000015258789062" x2="10.000019575949409" y2="12.000015258789062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="20.000019575949409" y1="16.000015258789062" x2="20.000019575949409" y2="12.000015258789062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.000019575949409" y1="16.000015258789062" x2="16.000019575949409" y2="12.000015258789062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
