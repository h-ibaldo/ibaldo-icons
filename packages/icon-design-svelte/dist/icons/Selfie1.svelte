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
  <rect x="1.999509295545067" y="4.999505878618947" width="20" height="14.000981371271337" rx="2.160322612580785" ry="2.160322612580785" transform="translate(23.999505859799683 .000487268709549) rotate(90)"/>
  <circle cx="11.999999981180736" cy="9.499996564258254" r="2.5"/>
  <path d="M14.999999981180736,16.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407361251-2.999996999998984-2.999996999991708-2.999996999998984h-.000005999998393c-1.656852592641371,0-2.999997000009898,1.343144407361251-2.999997000009898,2.999996999998984v2.000003000001016"/>
</svg>
