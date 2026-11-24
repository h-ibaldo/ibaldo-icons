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
  <rect x="2.999999990799552" y="2.000000000448381" width="18" height="20"/>
  <line x1="12.000000015979822" y1="2.000000000448381" x2="12.000000015979822" y2="22.000000000448381"/>
  <line x1="2.999999990799552" y1="9.000000000448381" x2="12.000000015979822" y2="9.000000000448381"/>
  <line x1="12.000000015979822" y1="15.000000000448381" x2="20.999999990799552" y2="15.000000000448381"/>
</svg>
