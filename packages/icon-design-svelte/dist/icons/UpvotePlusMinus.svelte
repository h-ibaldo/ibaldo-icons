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
  <line x1="11.516630450973935" y1="4.000000000480213" x2="11.516630450973935" y2="13.000000000476575" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.016630450973935" y1="8.500000000476575" x2="7.016630450973935" y2="8.500000000476575" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.016630450973935" y1="19.500000000476575" x2="7.016630450973935" y2="19.500000000476575" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
