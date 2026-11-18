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
  <path d="M3 2L21 21"/>
  <path d="M22 16L22 7C22 5.344 20.656 4 19 4L11 4"/>
  <path d="M4.902 4.012C3.293 4.063 2 5.375 2 7L2 15C2 16.656 3.344 18 5 18L8 18L12 22L16 18L18.156 18"/>
  <path d="M15 9L17 9"/>
  <path d="M7 9L9.633 9"/>
  <path d="M7 13L13 13"/>
</svg>
