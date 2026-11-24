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
  <path d="M2 2L6 2C7.105 2 8 2.895 8 4L8 20C8 21.105 7.105 22 6 22L2 22"/>
  <path d="M22 22L18 22C16.895 22 16 21.105 16 20L16 4C16 2.895 16.895 2 18 2L22 2"/>
  <path d="M12 2L12 4"/>
  <path d="M12 8L12 10"/>
  <path d="M12 14L12 16"/>
  <path d="M12 20L12 22"/>
</svg>
