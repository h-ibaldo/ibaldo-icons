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
  <rect x="2.000000001433364" y="1.999999999043212" width="20" height="20" rx="1.999999999998636" ry="1.999999999998636"/>
  <polyline points="10.000000002868546 14.999999999045031 15.000000002868546 14.999999999045031 15.000000002868546 9.999999999045031"/>
  <line x1="9.000000002868546" y1="8.999999999045031" x2="15.000000002868546" y2="14.999999999045031"/>
</svg>
