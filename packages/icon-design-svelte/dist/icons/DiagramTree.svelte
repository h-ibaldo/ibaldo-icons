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
  <rect x="2.016630450973025" y="17.000000000480213" width="4" height="4"/>
  <rect x="10.016630450973025" y="17.000000000480213" width="4" height="4"/>
  <rect x="10.016630450973025" y="3.000000000480213" width="4" height="4"/>
  <rect x="18.016630450973025" y="17.000000000480213" width="4" height="4"/>
  <polyline points="4.016630450971206 17.000000000480213 4.016630450971206 12.000000000480213 20.016630450971206 12.000000000480213 20.016630450971206 17.000000000480213"/>
  <line x1="12.016630450971206" y1="7.000000000480213" x2="12.016630450971206" y2="17.000000000480213"/>
</svg>
