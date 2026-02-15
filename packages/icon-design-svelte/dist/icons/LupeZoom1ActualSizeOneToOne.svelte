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
  <circle cx="10.974731417511066" cy="10.998779298535737" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="17.33868405422254" y1="17.362731935254487" x2="21.974731417511066" y2="21.998779298535737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="5.974731417511066 8.998779298535737 6.974731417511066 8.998779298535737 6.974731417511066 12.998779298535737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="13.974731417511066 8.998779298535737 14.974731417511066 8.998779298535737 14.974731417511066 12.998779298535737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.974731417511066" y1="9.008779298535956" x2="10.974731417511066" y2="8.998779298535737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.974731417511066" y1="13.008779298535956" x2="10.974731417511066" y2="12.998779298535737" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
