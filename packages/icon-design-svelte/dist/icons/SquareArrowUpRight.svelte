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
  <rect x="1.999999998563908" y="1.999999999045031" width="20" height="20" rx="1.999999999998408" ry="1.999999999998408" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="9.999999999998181 8.999999999045031 14.999999999998181 8.999999999045031 14.999999999998181 13.999999999045031" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.999999999998181" y1="14.999999999045031" x2="14.999999999998181" y2="8.999999999045031" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
