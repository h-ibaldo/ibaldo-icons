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
  <polyline points="19.016630450973025 2.000000000480213 22.016630450973025 5.000000000480213 19.016630450973025 8.000000000480213"/>
  <line x1="22.016630450973025" y1="5.000000000480213" x2="2.016630450973025" y2="5.000000000480213"/>
  <rect x="2.016630450681987" y="12.000000000480213" width="4.000000000289219" height="10"/>
  <rect x="10.016630450683806" y="12.000000000480213" width="4.000000000289219" height="10"/>
  <rect x="18.016630450973025" y="12.000000000480213" width="4.000000000289219" height="10"/>
</svg>
