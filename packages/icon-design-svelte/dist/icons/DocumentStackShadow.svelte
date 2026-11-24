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
  <rect x="7" y="6" width="14" height="16" rx="1" ry="1"/>
  <path d="M16,2H4c-.552284749830505,0-1,.447715250171314-1,1v14"/>
  <line x1="11" y1="10" x2="17" y2="10"/>
  <line x1="11" y1="14" x2="17" y2="14"/>
  <line x1="11" y1="18" x2="17" y2="18"/>
</svg>
