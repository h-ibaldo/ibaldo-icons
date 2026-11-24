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
  <path d="M13 5L18 5C19.105 5 20 5.895 20 7L20 20C20 21.105 19.105 22 18 22L6 22C4.895 22 4 21.105 4 20L4 7C4 5.895 4.895 5 6 5L9.5 5"/>
  <path d="M9.5 13.5C9.5 12.121 10.621 11 12 11C13.379 11 14.5 12.121 14.5 13.5C14.5 14.879 13.379 16 12 16C10.621 16 9.5 14.879 9.5 13.5Z"/>
  <path d="M10 8L14 8"/>
  <path d="M7.004 1.996L12 8"/>
  <path d="M14 5L17 2"/>
  <path d="M7 19C7 17.344 8.344 16 10 16L14 16C15.656 16 17 17.344 17 19"/>
</svg>
