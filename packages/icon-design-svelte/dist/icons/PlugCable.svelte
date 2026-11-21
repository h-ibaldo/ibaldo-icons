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
  <path d="M4 2L4 5"/>
  <path d="M20 22L20 19"/>
  <path d="M8 2L8 5"/>
  <path d="M16 22L16 19"/>
  <path d="M2 5L10 5L10 7C10 8.105 9.105 9 8 9L4 9C2.895 9 2 8.105 2 7Z"/>
  <path d="M22 19L14 19L14 17C14 15.895 14.895 15 16 15L20 15C21.105 15 22 15.895 22 17Z"/>
  <path d="M6 9L6 15.156C6 17.23 8.762 17.934 9.754 16.113L14.246 7.887C15.238 6.066 18 6.77 18 8.844L18 15"/>
</svg>
