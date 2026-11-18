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
  <path d="M5 2L17 22"/>
  <path d="M15.18 18.965C15.641 18.879 16 18.488 16 18L16 14.25L20.379 17.719C21.035 18.234 22 17.77 22 16.934L22 7.066C22 6.23 21.035 5.766 20.379 6.281L16 9.75L16 7C16 5.895 15.105 5 14 5L6.801 5"/>
  <path d="M2 6L2 17C2 18.105 2.895 19 4 19L10.199 19"/>
</svg>
