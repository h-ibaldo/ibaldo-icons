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
  <path d="M19 8L14.828 12.172C13.723 13.277 11.934 13.277 10.828 12.172C9.723 11.066 9.723 9.277 10.828 8.172L16.586 2.414C17.137 1.863 18.031 1.863 18.582 2.414L18.586 2.418C19.137 2.969 19.137 3.863 18.586 4.414L14 9"/>
  <path d="M22 11L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L11 2"/>
</svg>
