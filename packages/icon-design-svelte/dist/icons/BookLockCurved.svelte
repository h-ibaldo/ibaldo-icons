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
  <path d="M4 18L4 5C4 3.344 5.344 2 7 2L20 2L20 14"/>
  <path d="M20 18L8 18"/>
  <path d="M20 14L8 14C5.789 14 4 15.789 4 18C4 20.211 5.789 22 8 22L20 22"/>
  <path d="M9 9L15 9L15 11L9 11Z"/>
  <path d="M14 9L14 7C14 5.895 13.105 5 12 5C10.895 5 10 5.895 10 7L10 9"/>
</svg>
