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
  <path d="M11.999999994010068,18.998779299956368h-5c-.552284749830505,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250169495-1,1-1h11c.552284749830505,0,1,.447715250167676,1,1v5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.999999994010068,13.998779299956368V2.998779299956368c0-.552284749832324.447715250169495-1,1-1h11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
  <line x1="18.999999994010068" y1="15.998779299956368" x2="18.999999994010068" y2="21.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="21.999999994010068" y1="18.998779299865419" x2="15.999999994010068" y2="18.99877930004368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
