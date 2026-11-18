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
  <path d="M22 14L22 5C22 3.344 20.656 2 19 2L8 2"/>
  <path d="M2 2L20 21"/>
  <path d="M5.789 6L5 6C3.344 6 2 7.344 2 9L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C15.621 18 16.195 17.813 16.676 17.488"/>
  <path d="M18 12.723L18 9C18 7.344 16.656 6 15 6L11.633 6"/>
</svg>
