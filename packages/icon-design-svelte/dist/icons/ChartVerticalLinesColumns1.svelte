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
  <line x1="4" y1="21" x2="4" y2="15"/>
  <line x1="8" y1="21" x2="8" y2="12"/>
  <line x1="12" y1="21" x2="12" y2="9"/>
  <line x1="16" y1="21" x2="16" y2="6"/>
  <line x1="20" y1="21" x2="20" y2="3"/>
</svg>
