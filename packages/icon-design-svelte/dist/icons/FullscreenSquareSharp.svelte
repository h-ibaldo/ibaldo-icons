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
  <rect x="1.99999999829015" y="2.998782736161957" width="20" height="18" rx=".999999999997745" ry=".999999999997745" transform="translate(23.999999996041961 23.997565472862306) rotate(-180)"/>
  <polyline points="5.999999998300154 9.998782736161957 5.999999998300154 6.998782736161957 8.999999998210114 6.998782736161957"/>
  <polyline points="14.999999998300154 6.998782736252906 17.999999998210114 6.998782736161957 17.999999998300154 9.998782736161957"/>
  <polyline points="17.999999998300154 13.998782736161957 17.999999998300154 16.998782736161957 14.999999998390194 16.998782736161957"/>
  <polyline points="8.999999998300154 16.998782736071007 5.999999998390194 16.998782736161957 5.999999998300154 13.998782736161957"/>
</svg>
