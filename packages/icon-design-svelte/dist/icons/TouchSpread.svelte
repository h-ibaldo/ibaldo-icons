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
  <circle cx="16.025268539257922" cy="7.998779303641641" r="3.000000000001364"/>
  <polyline points="22.025268539275203 5.998777918128326 22.025268539635363 1.998779650268261 18.025270271775298 1.998779649911739"/>
  <line x1="18.146606429885651" y1="5.877441413016641" x2="22.025268539255194" y2="1.998779303641641"/>
  <circle cx="8.02526853996369" cy="15.998779303590709" r="3.000000000001364"/>
  <polyline points="2.025268539755416 17.998780688565603 2.02526853904601 21.998778956425667 6.025266806906075 21.998778957142349"/>
  <line x1="5.903930649144968" y1="18.120117194022896" x2="2.025268539415265" y2="21.998779303052288"/>
</svg>
