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
  <polyline points="8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 14.949462885140747 11.000000000480213"/>
  <path d="M11.949462885140747,13.000000000480213V5.000000000480213c0-1.656854249493335,1.343145750512122-3,3-3h4c1.656854249493335,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750506665,3-3,3H4.949462885140747c-1.656854249487878,0-3-1.343145750506665-3-3V5.000000000480213c0-1.656854249493335,1.343145750512122-3,3-3h3"/>
</svg>
