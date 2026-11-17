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
  <path d="M17.445 17.07L12.43 8.715C12.234 8.391 11.766 8.391 11.57 8.715L6.555 17.07C6.34 17.438 6.648 17.891 7.07 17.824L10 17.332L10 22L14 22L14 17.332L16.93 17.824C17.352 17.891 17.664 17.438 17.445 17.07Z"/>
  <path d="M12 2L12 4"/>
  <path d="M4 10L6 10"/>
  <path d="M18 10L20 10"/>
  <path d="M6.344 4.344L7.758 5.758"/>
  <path d="M16.242 5.758L17.656 4.344"/>
</svg>
