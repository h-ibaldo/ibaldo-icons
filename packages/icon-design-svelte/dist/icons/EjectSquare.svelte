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
  <path d="M17 17L7 17"/>
  <path d="M15.836 13.055L8.164 13.055C7.313 13.055 6.848 12.059 7.402 11.41L11.238 6.895C11.637 6.426 12.363 6.426 12.762 6.895L16.598 11.41C17.152 12.059 16.691 13.055 15.836 13.055Z"/>
  <path d="M2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19Z"/>
</svg>
