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
  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
  <line x1="2" y1="8" x2="22" y2="8"/>
  <line x1="19" y1="5" x2="11" y2="5"/>
  <line x1="7" y1="12" x2="7" y2="18"/>
  <line x1="12" y1="12" x2="12" y2="18"/>
  <line x1="17" y1="12" x2="17" y2="18"/>
  <line x1="6" y1="14" x2="8" y2="14"/>
  <line x1="11" y1="16" x2="13" y2="16"/>
  <line x1="16" y1="14" x2="18" y2="14"/>
  <line x1="5.009999993990277" y1="4.998779299956368" x2="4.999999993990059" y2="4.998779299956368"/>
  <line x1="8.009999993990277" y1="4.998779299956368" x2="7.999999993990059" y2="4.998779299956368"/>
</svg>
