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
  <path d="M12 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L10 2C11.105 2 12 2.895 12 4Z"/>
  <path d="M20 22L14 22C12.895 22 12 21.105 12 20L12 8L20 8C21.105 8 22 8.895 22 10L22 20C22 21.105 21.105 22 20 22Z"/>
  <path d="M2 9L8 9"/>
  <path d="M6 7L8 9L6 11"/>
  <path d="M22 15L16 15"/>
  <path d="M18 17L16 15L18 13"/>
</svg>
