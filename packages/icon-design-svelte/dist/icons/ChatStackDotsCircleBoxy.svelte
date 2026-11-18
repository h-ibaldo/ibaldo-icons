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
  <path d="M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"/>
  <path d="M15.5 17L15.5 17"/>
  <path d="M18.5 17L18.5 17"/>
  <path d="M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18L9 18"/>
  <path d="M22 10L22 5C22 3.344 20.656 2 19 2L7 2"/>
</svg>
