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
  <polyline points="12.000000026695488 1.999999999998181 12.000000026695488 9.999999999998181 9.000000026695488 7.999999999998181 6.000000026695488 9.999999999998181 6.000000026695488 1.999999999998181"/>
  <rect x="2.000000026695488" y="1.999999999998181" width="19.984068797650252" height="20" rx="2" ry="2"/>
  <line x1="6.000000026695488" y1="13.999999999998181" x2="18.000000026695488" y2="13.999999999998181"/>
  <line x1="15.984068824345741" y1="9.999999999998181" x2="18.000000026695488" y2="9.999999999998181"/>
  <line x1="15.984068824345741" y1="5.999999999998181" x2="18.000000026695488" y2="5.999999999998181"/>
  <line x1="6.000000026695488" y1="17.999999999998181" x2="18.000000026695488" y2="17.999999999998181"/>
</svg>
