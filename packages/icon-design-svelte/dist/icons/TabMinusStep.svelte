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
  <polyline points="12.149805223280055 21.998782740736715 2.050537109160359 21.998782740736715 2.050537109160359 1.998782740736715 11.050537109160359 1.998782740736715 11.050537109160359 5.998782740736715 22.050537109160359 5.998782740736715 22.050537109160359 13.998782740736715"/>
  <line x1="22.050537109160359" y1="1.998782740736715" x2="15.050537109160359" y2="1.998782740736715"/>
  <line x1="16.050537109160359" y1="18.998782740733986" x2="22.050537109160359" y2="18.998782740733986"/>
</svg>
