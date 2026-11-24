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
  <rect x="2.00000000018008" y="2.000000000448836" width="20" height="20" rx="1.999999999999068" ry="1.999999999999068"/>
  <line x1="22" y1="8" x2="2" y2="8.000000000897671"/>
  <line x1="19.009999999870161" y1="5.000000000133696" x2="18.999999999869942" y2="5.000000000133696"/>
  <line x1="16.009999999870161" y1="5.000000000268301" x2="15.999999999869942" y2="5.000000000268301"/>
  <line x1="13.009999999870161" y1="5.000000000403816" x2="12.999999999869942" y2="5.000000000403816"/>
</svg>
