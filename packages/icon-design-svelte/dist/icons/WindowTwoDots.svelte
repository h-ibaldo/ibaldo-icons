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
  <rect x="2.00000000018008" y="2.000000000448836" width="20" height="20" rx="1.999999999999432" ry="1.999999999999432"/>
  <line x1="22.00000000036016" y1="8.000000000897671" x2="2.00000000036016" y2="8"/>
  <line x1="8.010000000180298" y1="5.000000000763976" x2="8.00000000018008" y2="5.000000000763976"/>
  <line x1="5.010000000180298" y1="5.000000000627551" x2="5.00000000018008" y2="5.000000000627551"/>
</svg>
