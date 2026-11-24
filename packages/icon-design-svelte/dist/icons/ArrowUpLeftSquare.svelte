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
  <rect x="2.000000001433364" y="1.999999999045031" width="20" height="20" rx="1.999999999999545" ry="1.999999999999545"/>
  <polyline points="14.000000000129148 8.999999999132342 9.000000000129148 8.999999998910425 8.999999999909051 13.999999998910425"/>
  <line x1="14.999999999859938" y1="14.999999999179636" x2="9.000000000129148" y2="8.999999998910425"/>
</svg>
