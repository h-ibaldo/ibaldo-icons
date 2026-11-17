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
  <circle cx="11.999999981180736" cy="11.999996564258254" r="10"/>
  <rect x="6.999999981180736" y="6.999996564258254" width="10" height="10"/>
  <polyline points="9.999999981180736 11.999996564258254 10.999999981180736 13.499996564258254 13.999999981180736 10.999996564258254"/>
</svg>
