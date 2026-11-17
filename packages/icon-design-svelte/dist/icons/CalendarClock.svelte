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
  <path d="M9 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L18 4C19.105 4 20 4.895 20 6L20 7"/>
  <path d="M7 2L7 6"/>
  <path d="M15 2L15 6"/>
  <path d="M2 10L8 10"/>
  <path d="M22 16C22 19.313 19.313 22 16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16Z"/>
  <path d="M16 14L16 16L18 16"/>
</svg>
