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
  <polyline points="21.99999999981992 8.999999999012289 22 20.999999999012289 8 20.99999999919055"/>
  <polyline points="18.99999999945976 5.999999998386556 18.99999999963984 17.999999998382918 4.99999999963984 17.999999998561179"/>
  <rect x="2.000000002654815" y="2.999999998606654" width="14.00000000027012" height="11.999999999641659" transform="translate(18.000000005554021 17.999999996880696) rotate(-180)"/>
</svg>
