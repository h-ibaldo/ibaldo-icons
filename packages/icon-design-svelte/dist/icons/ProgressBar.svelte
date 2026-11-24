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
  <rect x="1.974731447505079" y="7.999999998411681" width="19.999999999999972" height="8.000000004690492" rx="3.999996000808866" ry="3.999996000808866"/>
  <rect x="4.974731447505022" y="10.999999995049066" width="7.999999999999972" height="2.000000011334095" rx=".999999006338874" ry=".999999006338874"/>
</svg>
