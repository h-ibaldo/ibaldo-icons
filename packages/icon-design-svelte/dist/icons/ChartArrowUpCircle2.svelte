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
  <circle cx="11.949462885139837" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="6.949462885139837 15.000000000480213 9.949462885139837 12.000000000480213 11.949462885139837 14.000000000480213 16.949462885139837 9.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="16.949462885139837 12.000000000480213 16.949462885139837 9.000000000480213 13.949462885139837 9.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
