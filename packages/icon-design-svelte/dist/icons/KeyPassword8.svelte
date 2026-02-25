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
  <line x1="22.000019575950319" y1="12.000015258789062" x2="8.000019575950319" y2="12.000015258789062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="20.000019575950319" y1="16.000015258789062" x2="20.000019575950319" y2="12.000015258789062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.000019575950319" y1="16.000015258789062" x2="16.000019575950319" y2="12.000015258789062" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000019606326418" y="7.000015258789062" width="5.999999963723212" height="10" rx="2.999996979915418" ry="2.999996979915418" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
