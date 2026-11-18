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
  <path d="M8 2L8 6"/>
  <path d="M16 2L16 6"/>
  <path d="M20 15.5C20 17.984 17.984 20 15.5 20C13.016 20 11 17.984 11 15.5C11 13.016 13.016 11 15.5 11C17.984 11 20 13.016 20 15.5Z"/>
  <path d="M22 22L19 19"/>
  <path d="M10 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 10"/>
</svg>
