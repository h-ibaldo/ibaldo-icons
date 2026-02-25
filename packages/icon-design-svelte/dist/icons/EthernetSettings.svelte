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
  <polyline points="5.000000000029104 7.999999999979991 2.000000000029104 11.999999999979991 5.000000000029104 15.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="19.000000000029104 15.999999999979991 22.000000000029104 11.999999999979991 19.000000000029104 7.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12.000000000029104" y1="12.009999999980209" x2="12.000000000029104" y2="11.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.000000000029104" y1="12.009999999980209" x2="16.000000000029104" y2="11.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.000000000029104" y1="12.009999999980209" x2="8.000000000029104" y2="11.999999999979991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
