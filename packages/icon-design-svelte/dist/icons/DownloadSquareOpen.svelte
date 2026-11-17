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
  <path d="M16.974731450030959,5.000000000462023h2c1.656854249487878,0,3,1.343145750503936,3,3v10.999999999997272c0,1.656854249493335-1.343145750512122,3-3,3H4.974731450030959c-1.656854249495154,0-3-1.343145750506665-3-3v-10.999999999997272c0-1.656854249496064,1.343145750504846-3,3-3h2"/>
  <polyline points="14.974731450030959 9.000000000462023 11.974731449356113 12.000000000462023 8.974731450030959 9.000000000462023"/>
  <line x1="11.9747314511078" y1="2.000000000462023" x2="11.974731449356113" y2="12.000000000462023"/>
  <line x1="6.974731450030959" y1="17.000000000462023" x2="16.974731450030959" y2="17.000000000462023"/>
</svg>
