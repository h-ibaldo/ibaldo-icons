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
  <rect x="1.999999994000973" y="1.998779299956368" width="7" height="5" rx="1" ry="1"/>
  <line x1="1.999999994000973" y1="9.998779299956368" x2="8.999999994000973" y2="9.998779299956368"/>
  <rect x="14.999999994000973" y="1.998779299956368" width="7" height="5" rx="1" ry="1"/>
  <line x1="14.999999994000973" y1="9.998779299956368" x2="21.999999994000973" y2="9.998779299956368"/>
  <rect x="1.999999994000973" y="13.99877929995273" width="7" height="5" rx="1" ry="1"/>
  <line x1="1.999999994000973" y1="21.998779299956368" x2="8.999999994000973" y2="21.998779299956368"/>
  <rect x="14.999999994000973" y="13.99877929995273" width="7" height="5" rx="1" ry="1"/>
  <line x1="14.999999994000973" y1="21.998779299956368" x2="21.999999994000973" y2="21.998779299956368"/>
</svg>
