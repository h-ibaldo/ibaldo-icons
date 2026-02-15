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
  <line x1="11.000000000220098" y1="4.032754075946286" x2="22.000000000220098" y2="4.032754075946286" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.000000000220098" y1="12.032754075946286" x2="22.000000000220098" y2="12.032754075946286" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.000000000220098" y1="20.032754075946286" x2="22.000000000220098" y2="20.032754075946286" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000000220098" y="10.032754075946286" width="4" height="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000000220098" y="2.032754075946286" width="4" height="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="2.000000000220098" y="18.032754075946286" width="4" height="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
