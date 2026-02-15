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
  <line x1="2.016630450972116" y1="4.000000000480213" x2="22.016630450972116" y2="4.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.016630450972116" y1="20.000000000480213" x2="22.016630450972116" y2="20.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="2.016630450972116 8.000000000480213 4.516630450972116 16.000000000480213 7.016630450972116 8.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="10.516630450972116" y1="8.000000000476575" x2="10.516630450972116" y2="16.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.516630450972116,8.000000000476575h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500338989,2-2,2h-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="22.016630450972116 8.000000000480213 22.016630450972116 16.000000000480213 18.016630450972116 8.000000000476575 18.016630450972116 16.000000000476575" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
