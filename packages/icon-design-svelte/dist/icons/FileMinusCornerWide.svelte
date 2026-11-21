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
  <path d="M2 14L2 4C2 2.895 2.895 2 4 2L14.918 2L22 9L22 20C22 21.105 21.105 22 20 22L12 22"/>
  <path d="M22 10L16 10C14.895 10 14 9.105 14 8L14 2"/>
  <path d="M8 19L2 19"/>
</svg>
