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
  <rect x="-2.025268582488934" y="5.998779298535737" width="20" height="12" rx="1" ry="1" transform="translate(19.973510716046803 4.02404788102467) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="21.974731417241856 14.998779298673981 18.974731417511066 11.998779298401132 21.974731417782095 8.998779298673981" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="1.974731417511066" y1="5.998779298535737" x2="13.974731417511066" y2="5.998779298535737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
