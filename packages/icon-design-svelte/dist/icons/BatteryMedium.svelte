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
  <path d="M17 18L4 18C2.895 18 2 17.105 2 16L2 8C2 6.895 2.895 6 4 6L17 6C18.105 6 19 6.895 19 8L19 16C19 17.105 18.105 18 17 18Z"/>
  <path d="M19 15L21.316 14.227C21.727 14.094 22 13.711 22 13.277L22 10.723C22 10.289 21.727 9.906 21.316 9.773L19 9"/>
  <path d="M6 10L6 14"/>
  <path d="M9 10L9 14"/>
</svg>
