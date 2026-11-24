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
  <rect x="5.016630450972116" y="2.000000000480213" width="14" height="20" rx="2" ry="2"/>
  <polyline points="10.016630450974844 8.000000000480213 12.016630450974844 6.000000000480213 14.016630450974844 8.000000000480213"/>
  <polyline points="14.016630451063975 16.000000000658474 12.016630450883895 18.000000000476575 10.016630451063975 16.000000000298314"/>
  <line x1="5.016630450972116" y1="12.000000000480213" x2="19.016630450972116" y2="12.000000000480213"/>
</svg>
