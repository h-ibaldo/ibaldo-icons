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
  <polyline points="15.025268534591305 12.999999999234205 12.025268534180213 15.99999999883039 9.025268534591305 12.999999998426574"/>
  <line x1="12.025268535260693" y1="7.99999999883039" x2="12.025268534180213" y2="15.999999998834028"/>
  <rect x="2.025268534815041" y="1.99999999883039" width="20" height="20" rx="2" ry="2"/>
</svg>
