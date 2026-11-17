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
  <line x1="12.016630450972116" y1="2.000000000480213" x2="12.016630450972116" y2="9.000000000480213"/>
  <polyline points="8.016630450972116 6.000000000480213 12.016630450972116 2.000000000480213 16.016630450972116 6.000000000480213"/>
  <line x1="12.016630450972116" y1="22.000000000480213" x2="12.016630450972116" y2="15.000000000480213"/>
  <polyline points="16.016630450972116 18.000000000480213 12.016630450972116 22.000000000480213 8.016630450972116 18.000000000480213"/>
</svg>
