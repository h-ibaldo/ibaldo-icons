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
  <path d="M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"/>
  <path d="M15 17L15 15.605C15 15.211 14.883 14.824 14.664 14.496L13.738 13.109C13.293 12.438 13.293 11.563 13.738 10.891L14.664 9.504C14.883 9.176 15 8.789 15 8.395L15 7"/>
  <path d="M9 17L15 17"/>
  <path d="M9 7L9 8.395C9 8.789 9.117 9.176 9.336 9.504L10.262 10.891C10.707 11.563 10.707 12.438 10.262 13.109L9.336 14.496C9.117 14.824 9 15.211 9 15.605L9 17"/>
  <path d="M15 7L9 7"/>
</svg>
