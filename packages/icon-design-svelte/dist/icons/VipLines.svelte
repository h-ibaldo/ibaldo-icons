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
  <polyline points="1.999999968595148 7.997562036226554 4.999999968595148 15.997562036226554 7.999999968595148 7.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.999999968595148" y1="7.997562036226554" x2="16.999999968595148" y2="15.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.999999968595148" y1="7.997562036226554" x2="11.999999968595148" y2="15.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.999999968595148,7.997562036226554h3c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="1.999999968586053" y1="3.997562036226554" x2="21.999999968586053" y2="3.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="1.999999968586053" y1="19.997562036226554" x2="21.999999968586053" y2="19.997562036226554" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
