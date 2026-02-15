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
    <line x1="13.999999993642632" y1="12.998779299956368" x2="9.999999993642632" y2="16.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="13.999999993642632" y1="16.998779299956368" x2="9.999999993642632" y2="12.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <rect x="1.999999993631718" y="1.998779299956368" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="1.999999993631718" y1="7.998779299956368" x2="21.999999993631718" y2="7.998779299956368" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
