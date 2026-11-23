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
  <path d="M2 10L6 14L11.516 8.484C12.621 7.379 14.41 7.379 15.516 8.484C16.621 9.59 16.621 11.379 15.516 12.484L10 18L14 22L19.516 16.484C22.828 13.172 22.828 7.801 19.516 4.484C16.199 1.172 10.828 1.172 7.516 4.484Z"/>
  <path d="M5 7L9 11"/>
  <path d="M13 15L17 19"/>
  <path d="M4 16L3 19L6 19L5 22"/>
</svg>
