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
  <circle cx="16.999999980991561" cy="16.997562035418014" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="14.999999980991561" y1="16.997562035418014" x2="18.999999980991561" y2="16.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.999999980991561" y1="14.997562035418014" x2="16.999999980991561" y2="18.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="3.999999980991561" y1="16.997562035418014" x2="8.999999980991561" y2="16.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="13.368408184122018 9.997562035418014 9.999999980991561 1.997562035418014 1.999999980991561 20.997562035418014" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
