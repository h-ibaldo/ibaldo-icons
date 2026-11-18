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
  <path d="M19 16L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L7 2C5.895 2 5 2.895 5 4L5 16C5 17.105 5.895 18 7 18L17 18C18.105 18 19 17.105 19 16Z"/>
  <path d="M13 2L13 7C13 7.552 13.448 8 14 8L19 8"/>
  <path d="M7 22L17 22"/>
  <path d="M12 18L12 22"/>
  <path d="M4 22L4 22"/>
  <path d="M20 22L20 22"/>
</svg>
