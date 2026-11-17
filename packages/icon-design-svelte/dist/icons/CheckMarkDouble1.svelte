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
  <polyline points="3.974731440090181 13.000000003874447 6.974731440090181 16.000000003874447 13.974731440090181 8.000000003874447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="9.974731440090181 13.000000003874447 12.974731440090181 16.000000003874447 19.974731440090181 8.000000003874447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
