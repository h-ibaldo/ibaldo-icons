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
  <polyline points="3.016630450973025 20.000000000480213 21.016630450973025 20.000000000480213 21.016630450973025 15.000000000480213 16.016630450973025 15.000000000480213 16.016630450973025 10.000000000480213 11.016630450973025 10.000000000480213 11.016630450973025 5.000000000480213 3.016630450973025 5.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="3.016630450973025" y1="2.500000000480213" x2="3.016630450973025" y2="22.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.016630450973025" y1="15.000000000480213" x2="3.016630450973025" y2="15.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.016630450973025" y1="10.000000000480213" x2="3.016630450973025" y2="10.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
