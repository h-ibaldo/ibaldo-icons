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
  <path d="M18.063 15C19.719 15 21.063 16.344 21.063 18C21.063 19.656 19.719 21 18.063 21C16.406 21 15.063 19.656 15.063 18C15.063 16.344 16.406 15 18.063 15Z"/>
  <path d="M6 9C4.344 9 3 7.656 3 6C3 4.344 4.344 3 6 3C7.656 3 9 4.344 9 6C9 7.656 7.656 9 6 9Z"/>
  <path d="M18.063 15L18.063 8C18.063 6.895 17.168 6 16.063 6L12 6"/>
  <path d="M6 9L6 21"/>
</svg>
