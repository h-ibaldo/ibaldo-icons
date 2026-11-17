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
  <rect x="2" y="6" width="20" height="12.000000000003638" rx="2" ry="2"/>
  <line x1="10" y1="13.989999999999782" x2="10" y2="14"/>
  <line x1="6" y1="13.989999999999782" x2="6" y2="14"/>
  <line x1="14" y1="13.989999999999782" x2="14" y2="14"/>
</svg>
