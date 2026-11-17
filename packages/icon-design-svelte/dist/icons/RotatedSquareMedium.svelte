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
  <rect x="4.221825375546285" y="4.219387443182239" width="15.556349186088632" height="15.556349186088632" rx="2.499999999998875" ry="2.499999999998875" transform="translate(-4.96883885696025 11.999285914731155) rotate(-44.999999999992944)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999968586053" y1="11.987562036226336" x2="11.999999968586053" y2="11.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7.999999968586053" y1="11.987562036226336" x2="7.999999968586053" y2="11.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="15.999999968586053" y1="11.987562036226336" x2="15.999999968586053" y2="11.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
