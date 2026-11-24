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
  <polyline points="4.999999968595148 7.997562036226554 6.999999968595148 15.997562036226554 8.999999968595148 7.997562036226554"/>
  <line x1="14.999999968595148" y1="7.997562036226554" x2="14.999999968595148" y2="15.997562036226554"/>
  <line x1="11.999999968595148" y1="7.997562036226554" x2="11.999999968595148" y2="15.997562036226554"/>
  <path d="M14.999999968595148,7.997562036226554h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-2"/>
  <rect x="1.999999968595148" y="3.997562036226554" width="20" height="16" rx="2" ry="2"/>
</svg>
