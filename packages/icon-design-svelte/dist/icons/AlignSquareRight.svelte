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
  <path d="M14 16L10 16C8.895 16 8 15.105 8 14L8 10C8 8.895 8.895 8 10 8L14 8C15.105 8 16 8.895 16 10L16 14C16 15.105 15.105 16 14 16Z"/>
  <path d="M22 19L22 5"/>
</svg>
