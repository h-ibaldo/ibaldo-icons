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
  <path d="M16.000000026696398,1.999999999998181h-8c-1.656854249494245,0-3,1.343145750509393-3,3v17l7-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750507574-3-3-3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.000000026696398,8.999999999998181v-.000001999998858c0-1.104568388791449.895429604907804-1.999998000001142,1.999997999998413-1.999998000001142h.000004000001354c1.10456839509061,0,1.999998000000232.895429604910532,1.999998000000232,1.999998000001142v.171575703679991c0,.530432449249929-.210713470017254,1.039139766338849-.585785851842047,1.414212148160004l-3.414214148157953,3.414214148158862h4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
