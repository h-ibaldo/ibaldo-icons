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
  <rect x="2.016630450973025" y="7.000000000480213" width="4" height="7.999999999996362"/>
  <line x1="4.016630450973025" y1="4.000000000480213" x2="4.016630450973025" y2="7.000000000480213"/>
  <line x1="4.016630450973025" y1="15.000000000480213" x2="4.016630450973025" y2="18.000000000480213"/>
  <rect x="10.016630450973025" y="11.000000000480213" width="4" height="7.999999999996362"/>
  <line x1="12.016630450973025" y1="8.000000000480213" x2="12.016630450973025" y2="11.000000000480213"/>
  <line x1="12.016630450973025" y1="19.000000000480213" x2="12.016630450973025" y2="22.000000000480213"/>
  <rect x="18.016630450973025" y="5.000000000480213" width="4" height="7.999999999996362"/>
  <line x1="20.016630450973025" y1="2.000000000480213" x2="20.016630450973025" y2="5.000000000480213"/>
  <line x1="20.016630450973025" y1="13.000000000480213" x2="20.016630450973025" y2="16.000000000480213"/>
</svg>
