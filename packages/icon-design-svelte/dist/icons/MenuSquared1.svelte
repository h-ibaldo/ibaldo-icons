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
  <rect x="2.000000004889444" y="1.999999995256076" width="4" height="4"/>
  <rect x="10.000000004889444" y="1.999999995256076" width="4" height="4"/>
  <rect x="18.000000004889444" y="1.999999995256076" width="4" height="4"/>
  <rect x="2.000000004889444" y="9.999999995256076" width="4" height="4"/>
  <rect x="10.000000004889444" y="9.999999995256076" width="4" height="4"/>
  <rect x="18.000000004889444" y="9.999999995256076" width="4" height="4"/>
  <rect x="2.000000004889444" y="17.999999995256076" width="4" height="4"/>
  <rect x="10.000000004889444" y="17.999999995256076" width="4" height="4"/>
  <rect x="18.000000004889444" y="17.999999995256076" width="4" height="4"/>
</svg>
