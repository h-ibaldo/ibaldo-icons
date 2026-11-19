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
  <path d="M2.293 8.879L3.879 7.293C4.269 6.902 4.902 6.902 5.293 7.293L13 15L13 18L10 18L2.293 10.293C1.902 9.902 1.902 9.269 2.293 8.879Z"/>
  <path d="M6 4L6 4C6 2.895 6.895 2 8 2L16.172 2C16.702 2 17.211 2.211 17.586 2.586L21.414 6.414C21.789 6.789 22 7.298 22 7.828L22 20C22 21.105 21.105 22 20 22L8 22C6.895 22 6 21.105 6 20L6 19"/>
  <path d="M16 2L16 7C16 7.552 16.448 8 17 8L22 8"/>
</svg>
