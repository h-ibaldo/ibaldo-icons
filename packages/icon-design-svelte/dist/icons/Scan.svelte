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
  <path d="M22 17L22 20C22 21.105 21.105 22 20 22L17 22"/>
  <path d="M2 7L2 4C2 2.895 2.895 2 4 2L7 2"/>
  <path d="M17 2L20 2C21.105 2 22 2.895 22 4L22 7"/>
  <path d="M7 22L4 22C2.895 22 2 21.105 2 20L2 17"/>
</svg>
