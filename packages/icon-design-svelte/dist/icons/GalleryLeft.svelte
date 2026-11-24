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
  <path d="M7 19L7 5"/>
  <path d="M2 17L2 7"/>
  <path d="M22 4L22 20C22 21.105 21.105 22 20 22L14 22C12.895 22 12 21.105 12 20L12 4C12 2.895 12.895 2 14 2L20 2C21.105 2 22 2.895 22 4Z"/>
</svg>
