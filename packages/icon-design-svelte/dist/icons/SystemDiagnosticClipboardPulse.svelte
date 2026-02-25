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
  <g>
  <path d="M20.999999990599463,18.000000005169568v2c0,1.104569499661011-.895430500329894,2-2,2H4.999999990599463c-1.104569499659192,0-2-.895430500338989-2-2V6.000000005169568c0-1.104569499661011.895430500340808-2,2-2h3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.999999990599463,4.000000005169568h3c1.104569499670106,0,2,.895430500338989,2,2v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="7.999999990599463" y="2.000000005169568" width="8" height="5" rx="1.11803398874963" ry="1.11803398874963" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <polyline points="20.999999990599463 14.000000005707989 16.999999990599463 14.000000005347829 14.999999990599463 18.000000005169568 10.999999990870492 11.000000005169568 8.999999990599463 14.000000004627509 6.999999990599463 14.000000004270987" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
