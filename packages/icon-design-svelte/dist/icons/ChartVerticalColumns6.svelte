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
  <rect x="2" y="13" width="4" height="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="10" y="3" width="4" height="18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="18" y="8" width="4" height="13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
