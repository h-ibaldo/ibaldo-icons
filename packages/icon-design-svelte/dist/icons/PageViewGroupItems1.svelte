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
  <path d="M11.999999994000973,18.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2v-8c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
  <line x1="18.999999994000973" y1="15.998779299956368" x2="18.999999994000973" y2="21.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="21.999999994000973" y1="18.998779299865419" x2="15.999999994000973" y2="18.99877930004368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M6.999999994000973,13.998779299956368h-3c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h8c1.104569499668287,0,2,.895430500338989,2,2v3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
