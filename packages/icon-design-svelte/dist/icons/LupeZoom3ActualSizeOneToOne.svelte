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
  <circle cx="8.999999981002475" cy="8.997562035418014" r="7.000000000000001" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="21.999999981002475" y1="21.997562035418014" x2="13.999999981002475" y2="13.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="5.999999980991561" y1="6.997562035418014" x2="5.999999980991561" y2="10.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999980991561" y1="6.997562035418014" x2="11.999999980991561" y2="10.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.999999980991561" y1="7.007562035418232" x2="8.999999980991561" y2="6.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.999999980991561" y1="11.007562035418232" x2="8.999999980991561" y2="10.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
