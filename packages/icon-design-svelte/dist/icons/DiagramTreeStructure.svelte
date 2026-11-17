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
  <rect x="2.949462885142566" y="2.000000000480213" width="8" height="4"/>
  <rect x="12.949462885142566" y="10.000000000480213" width="8" height="4"/>
  <rect x="12.949462885142566" y="18.000000000480213" width="8" height="4"/>
  <polyline points="6.949462885142566 6.000000000480213 6.949462885142566 20.000000000480213 12.949462885142566 20.000000000480213"/>
  <line x1="6.949462885142566" y1="12.000000000480213" x2="12.949462885142566" y2="12.000000000480213"/>
</svg>
