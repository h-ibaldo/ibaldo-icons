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
  <path d="M5 7L19 7"/>
  <path d="M7 2L17 2"/>
  <path d="M20 22L4 22C2.895 22 2 21.105 2 20L2 14C2 12.895 2.895 12 4 12L20 12C21.105 12 22 12.895 22 14L22 20C22 21.105 21.105 22 20 22Z"/>
</svg>
