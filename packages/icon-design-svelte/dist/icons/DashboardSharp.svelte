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
  <rect x="3.000000001580702" y="12.00000002768229" width="7" height="9"/>
  <rect x="13.999999990799552" y="3.00000002768229" width="7" height="9"/>
  <rect x="13.999999990799552" y="16.00000002768229" width="7" height="5"/>
  <rect x="3.000000001580702" y="3.00000002768229" width="7" height="5"/>
</svg>
