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
  <polyline points="9.0252685320811 21.99877930112325 2.0252685320811 21.99877930112325 2.0252685320811 1.99877930112325 11.0252685320811 1.99877930112325 11.0252685320811 5.99877930112325 22.0252685320811 5.99877930112325 22.0252685320811 8.998779301119612" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.0252685320811" y1="1.99877930112325" x2="15.0252685320811" y2="1.99877930112325" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <circle cx="16.525268529728237" cy="16.498779303550691" r="5.499999997577106" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="18.025268532150221" y1="14.99877930112325" x2="15.025268532150221" y2="17.99877930112325" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="15.025268532219343" y1="14.998779301057766" x2="18.0252685320811" y2="17.998779301192371" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
