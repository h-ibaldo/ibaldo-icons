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
  <path d="M18 12C18 13.105 17.105 14 16 14L4 14C2.895 14 2 13.105 2 12L2 8C2 6.895 2.895 6 4 6L5 6L5 2L10 6L12 6"/>
  <path d="M22 12L22 16C22 17.105 21.105 18 20 18L19 18L19 22L14 18L7 18"/>
  <path d="M16 5C16 6.656 17.344 8 19 8C20.656 8 22 6.656 22 5C22 3.344 20.656 2 19 2C17.344 2 16 3.344 16 5Z"/>
</svg>
