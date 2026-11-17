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
  <rect x="1.974731417511066" y="1.998779298535737" width="20" height="20" rx="1" ry="1"/>
  <line x1="1.974731417511066" y1="5.998779298535737" x2="21.974731417511066" y2="5.998779298535737"/>
  <line x1="7.974731417471048" y1="14.498779298357476" x2="7.974731417511066" y2="13.498779298357476"/>
  <line x1="11.974731417471048" y1="14.498779298535737" x2="11.974731417511066" y2="13.498779298535737"/>
  <line x1="11.974731417471048" y1="14.498779298535737" x2="11.974731417511066" y2="13.498779298535737"/>
  <line x1="15.974731417471048" y1="14.498779298717636" x2="15.974731417511066" y2="13.498779298717636"/>
</svg>
