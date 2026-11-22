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
  <path d="M22 22L2 22"/>
  <path d="M5.078 2L8.922 2C9.52 2 10 2.484 10 3.09L10 15.91C10 16.512 9.52 17 8.922 17L5.078 17C4.48 17 4 16.512 4 15.91L4 3.09C4 2.484 4.48 2 5.078 2Z"/>
  <path d="M15.098 8L18.906 8C19.512 8 20 8.477 20 9.063L20 15.941C20 16.527 19.512 17 18.906 17L15.098 17C14.492 17 14 16.527 14 15.941L14 9.063C14 8.477 14.492 8 15.098 8Z"/>
</svg>
