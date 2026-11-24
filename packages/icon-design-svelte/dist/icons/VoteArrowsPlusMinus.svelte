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
  <line x1="18.016630450973935" y1="3.000000000480213" x2="18.016630450973935" y2="11.000000000480213"/>
  <line x1="5.016630450973935" y1="2.000000000480213" x2="5.016630450973935" y2="9.000000000480213"/>
  <line x1="22.016630450973935" y1="7.000000000480213" x2="14.016630450973935" y2="7.000000000480213"/>
  <line x1="22.016630450973935" y1="19.000000000480213" x2="14.016630450973935" y2="19.000000000480213"/>
  <polyline points="2.016630450973935 5.000000000480213 5.016630450973935 2.000000000480213 8.016630450973935 5.000000000480213"/>
  <line x1="5.016630450973935" y1="22.000000000480213" x2="5.016630450973935" y2="15.000000000480213"/>
  <polyline points="8.016630450973935 19.000000000480213 5.016630450973935 22.000000000480213 2.016630450973935 19.000000000480213"/>
</svg>
