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
  <polyline points="15.000000026699126 1.999999999998181 15.000000026699126 10.999999999998181 12.000000026699126 8.999999999998181 9.000000026699126 10.999999999998181 9.000000026699126 1.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="4.000000026699126" y="1.999999999998181" width="16" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
