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
  <path d="M6 11.5C9.59 11.5 12.5 14.41 12.5 18"/>
  <path d="M19 11.5C15.41 11.5 12.5 14.41 12.5 18"/>
  <path d="M19 11.5C15.41 11.5 12.5 8.59 12.5 5"/>
  <path d="M6 11.5C9.59 11.5 12.5 8.59 12.5 5"/>
  <path d="M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z"/>
  <path d="M5.5 16L5.5 21"/>
  <path d="M8 18.5L3 18.5"/>
</svg>
