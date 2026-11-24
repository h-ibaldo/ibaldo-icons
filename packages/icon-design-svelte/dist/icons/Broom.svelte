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
  <path d="M19 13L5 13L3 22L21 22Z"/>
  <path d="M15 22L15 18"/>
  <path d="M9 22L9 19"/>
  <path d="M20 11L20 13L4 13L4 11C4 9.895 4.895 9 6 9L10 9L10 4C10 2.895 10.895 2 12 2C13.105 2 14 2.895 14 4L14 9L18 9C19.105 9 20 9.895 20 11Z"/>
</svg>
