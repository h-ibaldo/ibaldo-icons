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
  <rect x="2" y="1.999999999998181" width="20" height="20" rx="1" ry="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <line x1="12" y1="17.999999999998181" x2="12" y2="13.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="11 14.999999999998181 12 13.999999999998181 13 14.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g>
    <line x1="17" y1="17.999999999998181" x2="17" y2="13.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="16 14.999999999998181 17 13.999999999998181 18 14.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <polyline points="9 1.999999999998181 9 6.999999999998181 15 6.999999999998181 15 1.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
