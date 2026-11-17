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
  <rect x="1.974731417511066" y="9.998779298535737" width="20" height="12" rx="1" ry="1"/>
  <polyline points="8.974731417511066 4.998779298535737 11.974731417511066 1.998779298535737 14.974731417511066 4.998779298535737"/>
  <line x1="1.974731417511066" y1="13.998779298535737" x2="21.974731417511066" y2="13.998779298535737"/>
</svg>
