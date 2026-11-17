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
  <polygon points="15.016630450973025 3.000000000480213 15.016630450973025 8.000000000480213 9.016630450973025 8.000000000480213 9.016630450973025 13.000000000480213 3.016630450973025 13.000000000480213 3.016630450973025 21.000000000480213 9.016630450973025 21.000000000480213 15.016630450973025 21.000000000480213 21.016630450973025 21.000000000480213 21.016630450973025 3.000000000480213 15.016630450973025 3.000000000480213"/>
  <line x1="15.016630450973025" y1="8.000000000480213" x2="15.016630450973025" y2="21.000000000480213"/>
  <line x1="9.016630450973025" y1="13.000000000480213" x2="9.016630450973025" y2="21.000000000480213"/>
</svg>
