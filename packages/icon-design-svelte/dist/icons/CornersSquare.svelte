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
  <path d="M2 9L2 4C2 2.895 2.895 2 4 2L9 2"/>
  <path d="M15 2L20 2C21.105 2 22 2.895 22 4L22 9"/>
  <path d="M22 15L22 20C22 21.105 21.105 22 20 22L15 22"/>
  <path d="M4 22L8 22C9.105 22 10 21.105 10 20L10 16C10 14.895 9.105 14 8 14L4 14C2.895 14 2 14.895 2 16L2 20C2 21.105 2.895 22 4 22Z"/>
</svg>
