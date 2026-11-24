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
  <path d="M20 22L20 2L4 2L4 22L8 20L12 22L16 20Z"/>
  <path d="M8 7L12 7"/>
  <path d="M15 7L16 7"/>
  <path d="M8 11L12 11"/>
  <path d="M15 11L16 11"/>
  <path d="M8 15L12 15"/>
  <path d="M15 15L16 15"/>
</svg>
