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
  <rect x="1.999999977100742" y="5.99999656343789" width="20" height="11.999999999996362" rx="3" ry="3"/>
  <path d="M7.999999977100742,5.99999656343789h1c1.656854249489697,0,3,1.343145750506665,3,3v5.999999999996362c0,1.656854249493335-1.343145750510303,3-3,3h-1"/>
</svg>
