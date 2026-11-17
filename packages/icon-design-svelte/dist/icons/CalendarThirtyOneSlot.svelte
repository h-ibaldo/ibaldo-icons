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
  <path d="M19.777 22L4.223 22C2.996 22 2 21.004 2 19.777L2 4.223C2 2.996 2.996 2 4.223 2L19.777 2C21.004 2 22 2.996 22 4.223L22 19.777C22 21.004 21.004 22 19.777 22Z"/>
  <path d="M7 6L9 6"/>
  <path d="M15 6L17 6"/>
  <path d="M15 11L16.5 11L16.5 18"/>
  <path d="M9 14C10.105 14 11 14.895 11 16C11 17.105 10.105 18 9 18C8.262 18 7.625 17.594 7.277 17"/>
  <path d="M7 11L11 11L9 14"/>
</svg>
