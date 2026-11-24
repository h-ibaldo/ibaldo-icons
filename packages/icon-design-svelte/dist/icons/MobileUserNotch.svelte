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
  <path d="M11 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13 2C14.105 2 15 2.895 15 4L15 10.945"/>
  <path d="M8 5L10 5"/>
  <path d="M14 22C14 20.344 15.344 19 17 19L18 19C19.656 19 21 20.344 21 22"/>
  <path d="M15 16.5C15 15.121 16.121 14 17.5 14C18.879 14 20 15.121 20 16.5C20 17.879 18.879 19 17.5 19C16.121 19 15 17.879 15 16.5Z"/>
</svg>
