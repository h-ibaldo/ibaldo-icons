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
  <line x1="11.999999993611709" y1="10.008779299956586" x2="11.999999993611709" y2="9.998779299956368"/>
  <line x1="11.999999993611709" y1="14.008779299956586" x2="11.999999993611709" y2="13.998779299956368"/>
  <polyline points="6.999999993611709 14.998779299956368 6.999999993611709 8.998779299956368 5.999999993611709 8.998779299956368"/>
  <polyline points="16.999999993611709 14.998779299956368 16.999999993611709 8.998779299956368 15.999999993611709 8.998779299956368"/>
  <rect x="1.999999993611709" y="3.998779299956368" width="20" height="16" rx="1" ry="1"/>
</svg>
