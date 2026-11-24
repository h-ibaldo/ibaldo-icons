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
  <path d="M6.117 12C6.117 10.895 5.223 10 4.117 10C3.016 10 2.117 10.895 2.117 12C2.117 13.105 3.016 14 4.117 14C5.223 14 6.117 13.105 6.117 12Z"/>
  <path d="M6.117 4C6.117 2.895 5.223 2 4.117 2C3.016 2 2.117 2.895 2.117 4C2.117 5.105 3.016 6 4.117 6C5.223 6 6.117 5.105 6.117 4Z"/>
  <path d="M10.117 20L22.117 20"/>
  <path d="M10.117 12L22.117 12"/>
  <path d="M10.117 4L22.117 4"/>
  <path d="M6.117 22L2.117 18"/>
  <path d="M2.117 22L6.117 18"/>
</svg>
