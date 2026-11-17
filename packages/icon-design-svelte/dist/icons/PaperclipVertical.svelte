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
  <path d="M18 8L18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16L6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6L14 15C14 16.105 13.105 17 12 17C10.895 17 10 16.105 10 15L10 8"/>
</svg>
