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
  <path d="M5 12L19 12L19 2L5 2Z"/>
  <path d="M10 2L10 6"/>
  <path d="M15 2L15 5"/>
  <path d="M4 14L4 12L20 12L20 14C20 15.105 19.105 16 18 16L14 16L14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20L10 16L6 16C4.895 16 4 15.105 4 14Z"/>
</svg>
