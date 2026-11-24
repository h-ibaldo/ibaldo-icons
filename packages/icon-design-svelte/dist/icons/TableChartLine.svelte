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
  <rect x="1.949462885142566" y="2.000000000480213" width="20" height="20"/>
  <line x1="1.949462885142566" y1="6.000000000480213" x2="21.949462885142566" y2="6.000000000480213"/>
  <line x1="5.949462885142566" y1="2.000000000480213" x2="5.949462885142566" y2="22.000000000480213"/>
  <polyline points="9.949462885142566 17.000000000480213 12.949462885142566 13.000000000480213 14.949462885142566 15.000000000480213 17.949462885142566 11.000000000480213"/>
</svg>
