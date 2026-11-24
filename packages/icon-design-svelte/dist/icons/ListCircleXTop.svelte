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
  <path d="M6.117 12C6.117 13.105 5.223 14 4.117 14C3.016 14 2.117 13.105 2.117 12C2.117 10.895 3.016 10 4.117 10C5.223 10 6.117 10.895 6.117 12Z"/>
  <path d="M6.117 20C6.117 21.105 5.223 22 4.117 22C3.016 22 2.117 21.105 2.117 20C2.117 18.895 3.016 18 4.117 18C5.223 18 6.117 18.895 6.117 20Z"/>
  <path d="M10.117 4L22.117 4"/>
  <path d="M10.117 12L22.117 12"/>
  <path d="M10.117 20L22.117 20"/>
  <path d="M6.117 2L2.117 6"/>
  <path d="M2.117 2L6.117 6"/>
</svg>
