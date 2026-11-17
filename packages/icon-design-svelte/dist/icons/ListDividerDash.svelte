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
  <path d="M9 3L21 3"/>
  <path d="M3 12L21 12"/>
  <path d="M9 21L21 21"/>
  <path d="M3 3L4 3"/>
  <path d="M9 7L21 7"/>
  <path d="M3 7L4 7"/>
  <path d="M9 17L21 17"/>
  <path d="M3 17L4 17"/>
  <path d="M3 21L4 21"/>
</svg>
