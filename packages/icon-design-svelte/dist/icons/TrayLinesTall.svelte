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
  <path d="M3 14L3 20C3 21.105 3.895 22 5 22L19 22C20.105 22 21 21.105 21 20L21 14"/>
  <path d="M7 17L17 17"/>
  <path d="M7 12L17 12"/>
  <path d="M7 7L17 7"/>
  <path d="M7 2L17 2"/>
</svg>
