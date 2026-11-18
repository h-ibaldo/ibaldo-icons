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
  <path d="M22 16L16 16L8 21L8 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L22 2"/>
  <path d="M6 12L8 6L10 12"/>
  <path d="M14 6L13 6L13 12L14 12C15.105 12 16 11.105 16 10L16 8C16 6.895 15.105 6 14 6Z"/>
  <path d="M19 11.5C19 11.5 19.449 12 20.5 12C21.328 12 22 11.328 22 10.5C22 9.672 21.207 9.215 20.5 9C19.707 8.762 19 8.328 19 7.5C19 6.672 19.672 6 20.5 6C21.551 6 22 6.5 22 6.5"/>
  <path d="M7 11L9 11"/>
</svg>
