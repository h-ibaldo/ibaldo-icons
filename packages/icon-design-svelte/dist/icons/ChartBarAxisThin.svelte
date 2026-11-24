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
  <polyline points="2 2 2 22 22 22"/>
  <line x1="7" y1="22" x2="7" y2="16"/>
  <line x1="11" y1="22" x2="11" y2="12"/>
  <line x1="15" y1="22" x2="15" y2="8"/>
  <line x1="19" y1="22" x2="19" y2="4"/>
</svg>
