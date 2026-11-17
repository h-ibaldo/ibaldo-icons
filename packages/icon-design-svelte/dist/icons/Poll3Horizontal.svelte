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
  <rect x="9.999999999810825" y="1.99999999981992" width="6" height="4"/>
  <rect x="9.999999999810825" y="9.99999999981992" width="12" height="4"/>
  <rect x="9.999999999810825" y="17.99999999981992" width="9" height="4"/>
  <rect x="1.999999999810825" y="1.99999999981992" width="4" height="4"/>
  <rect x="1.999999999810825" y="9.99999999981992" width="4" height="4"/>
  <rect x="1.999999999810825" y="17.99999999981992" width="4" height="4"/>
</svg>
