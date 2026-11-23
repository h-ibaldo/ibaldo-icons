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
  <path d="M5 16C5 9.926 9.926 5 16 5"/>
  <path d="M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z"/>
  <path d="M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z"/>
  <path d="M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z"/>
  <path d="M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z"/>
  <path d="M18 18L22 16L13 13L16 22Z"/>
</svg>
