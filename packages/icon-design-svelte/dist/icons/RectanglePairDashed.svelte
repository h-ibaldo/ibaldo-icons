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
  <path d="M16 22L20 22C21.105 22 22 21.105 22 20L22 4C22 2.895 21.105 2 20 2L16 2C14.895 2 14 2.895 14 4L14 20C14 21.105 14.895 22 16 22Z"/>
  <path d="M10 2L8 2"/>
  <path d="M8 22L10 22"/>
  <path d="M4 2C2.895 2 2 2.895 2 4"/>
  <path d="M2 8L2 10"/>
  <path d="M2 14L2 16"/>
  <path d="M2 20C2 21.105 2.895 22 4 22"/>
</svg>
