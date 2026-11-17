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
  <path d="M22 14L22 5C22 3.344 20.656 2 19 2L13 2"/>
  <path d="M10 12L2 12L2 7L10 7Z"/>
  <path d="M3 7L3 5C3 3.344 4.344 2 6 2C7.656 2 9 3.344 9 5L9 7"/>
  <path d="M2.184 16C2.598 17.16 3.695 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6"/>
</svg>
