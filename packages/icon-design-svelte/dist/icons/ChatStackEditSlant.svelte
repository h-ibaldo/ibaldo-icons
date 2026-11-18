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
  <path d="M2 10L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6"/>
  <path d="M22 14L22 5C22 3.344 20.656 2 19 2L10 2"/>
  <path d="M3.586 3.414L3.414 3.586C2.633 4.367 2.633 5.633 3.414 6.414L10 13L13 13L13 10L6.414 3.414C5.633 2.633 4.367 2.633 3.586 3.414Z"/>
  <path d="M8 5L5 8"/>
</svg>
