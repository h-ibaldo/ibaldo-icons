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
  <path d="M9 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14L10 14"/>
  <path d="M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 15"/>
  <path d="M20 12L14 12C12.895 12 12 11.105 12 10L12 4C12 2.895 12.895 2 14 2L20 2C21.105 2 22 2.895 22 4L22 10C22 11.105 21.105 12 20 12Z"/>
  <path d="M22 6C18.688 6 16 8.688 16 12"/>
  <path d="M15 5L15 5"/>
</svg>
