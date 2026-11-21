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
  <path d="M19.063 15C20.719 15 22.063 16.344 22.063 18C22.063 19.656 20.719 21 19.063 21C17.406 21 16.063 19.656 16.063 18C16.063 16.344 17.406 15 19.063 15Z"/>
  <path d="M5 9C3.344 9 2 7.656 2 6C2 4.344 3.344 3 5 3C6.656 3 8 4.344 8 6C8 7.656 6.656 9 5 9Z"/>
  <path d="M19.063 15L19.063 8C19.063 6.895 18.168 6 17.063 6L12 6"/>
  <path d="M5 9L5 16C5 17.105 5.895 18 7 18L12 18"/>
  <path d="M9 15L12 18L9 21"/>
  <path d="M15 9L12 6L15 3"/>
</svg>
