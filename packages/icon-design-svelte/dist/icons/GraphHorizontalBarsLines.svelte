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
  <line x1="1.949462885144385" y1="7.000000000480213" x2="6.949462885142566" y2="7.000000000480213"/>
  <line x1="1.949462885144385" y1="12.000000000480213" x2="15.949462885142566" y2="12.000000000480213"/>
  <line x1="1.949462885144385" y1="17.000000000480213" x2="12.949462885142566" y2="17.000000000480213"/>
</svg>
