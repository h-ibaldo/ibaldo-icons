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
  <path d="M6 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L12.758 2C13.555 2 14.316 2.316 14.879 2.879L18.121 6.121C18.684 6.684 19 7.445 19 8.242L19 12"/>
  <path d="M13 2L13 6C13 7.105 13.895 8 15 8L19 8"/>
  <path d="M13 19L17 19"/>
  <path d="M13 22L12 22C10.344 22 9 20.656 9 19C9 17.344 10.344 16 12 16L13 16"/>
  <path d="M17 16L18 16C19.656 16 21 17.344 21 19C21 20.656 19.656 22 18 22L17 22"/>
</svg>
