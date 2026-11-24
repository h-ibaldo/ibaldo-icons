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
  <circle cx="9.97473141752198" cy="9.998779298535737" r="8"/>
  <line x1="15.631591769080842" y1="15.655639650098237" x2="21.97473141752198" y2="21.998779298535737"/>
  <polyline points="6.974731417511066 7.998779298535737 6.974731417511066 6.998779298535737 7.974731417511066 6.998779298535737"/>
  <polyline points="11.974731417492876 12.998779298513909 12.974731417492876 12.998779298557565 12.974731417532894 11.998779298557565"/>
  <polyline points="7.974731417381918 12.998779298470254 6.974731417381918 12.99877929842296 6.974731417421935 11.99877929842296"/>
  <polyline points="12.974731417582007 7.998779298713998 12.974731417671137 6.998779298713998 11.974731417671137 6.998779298626687"/>
  <line x1="6.974731417511066" y1="6.998779298535737" x2="12.974731417511066" y2="12.998779298535737"/>
  <line x1="6.974731417372823" y1="12.998779298401132" x2="12.974731417642033" y2="6.998779298670343"/>
</svg>
