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
  <path d="M2 22L5.902 2.492C5.961 2.207 6.211 2 6.5 2C6.789 2 7.039 2.207 7.098 2.492L11 22"/>
  <path d="M3.602 14L9.398 14"/>
  <path d="M15 22L15 2L16.5 2C18.984 2 21 4.016 21 6.5C21 8.984 18.984 11 16.5 11L15 11L16.5 11C19.539 11 22 13.461 22 16.5C22 19.539 19.539 22 16.5 22Z"/>
</svg>
