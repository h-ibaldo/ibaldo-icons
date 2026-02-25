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
  <rect x="1.999999993601705" y="2.998779299956368" width="20" height="18" rx=".999999999993015" ry=".999999999993015" transform="translate(23.99999998666507 23.997558600451129) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="9.999999994692189" y="10.998779300069145" width="7.999999998810381" height="5.999999998679414" transform="translate(27.999999987672759 27.997558599339754) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
