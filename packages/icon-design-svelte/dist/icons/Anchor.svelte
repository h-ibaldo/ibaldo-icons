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
  <path d="M14.5 4.5C14.5 5.883 13.383 7 12 7C10.617 7 9.5 5.883 9.5 4.5C9.5 3.117 10.617 2 12 2C13.383 2 14.5 3.117 14.5 4.5Z"/>
  <path d="M12 8L12 21"/>
  <path d="M9 12L15 12"/>
  <path d="M3.156 14C3.602 18.492 7.391 22 12 22C16.609 22 20.398 18.492 20.844 14"/>
  <path d="M19 15L21 13L22 16"/>
  <path d="M5 15L3 13L2 16"/>
</svg>
