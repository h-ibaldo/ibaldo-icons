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
  <circle cx="11.999999994010068" cy="3.997565472760471" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="3.999999994010068 6.997565472760471 8.999999994010068 8.997565472712267 14.999999994010068 8.997565472712267 19.999999994010068 6.997565472760471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="8.999999994010068 8.997565472712267 8.999999994010068 14.997565472712267 6.999999994010068 21.997565472760471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="14.999999993649908 8.997565472760471 14.999999993829988 14.997565472760471 16.999999994010068 21.997565472712267" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.999999994010068" y1="14.997565472712267" x2="14.999999994010068" y2="14.997565472712267" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
