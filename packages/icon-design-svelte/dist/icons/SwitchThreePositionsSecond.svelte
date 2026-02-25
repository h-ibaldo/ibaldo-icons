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
  <circle cx="11.999999977100742" cy="15.999996563436071" r="6.000000000000909" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999977029802" y1="18.828423688180919" x2="11.999999977160769" y2="13.171569438687584" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="19.999999977100742" cy="3.99999656343789" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="11.999999977100742" cy="3.99999656343789" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="3.999999977100742" cy="3.99999656343789" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999977100742" y1="3.99999656343789" x2="11.999999977100742" y2="3.99999656343789" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
