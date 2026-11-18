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
  <path d="M5.367 4.5L5 4.5C3.344 4.5 2 5.844 2 7.5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L18.156 18"/>
  <path d="M21.973 15.25C21.98 15.168 22 15.086 22 15L22 7.5C22 5.844 20.656 4.5 19 4.5L11.789 4.5"/>
  <path d="M14 9L16 9"/>
  <path d="M8 9L9.633 9"/>
  <path d="M8 13L13.422 13"/>
</svg>
