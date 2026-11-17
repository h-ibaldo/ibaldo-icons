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
  <rect x="9.000000000776865" y="8.998779293414614" width="1.999999999939774" height="1.999999998869015" rx=".999998993246465" ry=".999998993246465"/>
  <rect x="1.999999993642632" y="1.998779299956368" width="20" height="20" rx="1" ry="1"/>
  <rect x="5.999999993642632" y="5.998779299956368" width="12" height="12" rx="1" ry="1"/>
  <path d="M17.999999993642632,10.998779299956368c-3.865993248600716,0-7,3.134006751399284-7,7"/>
</svg>
