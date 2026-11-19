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
  <path d="M19 14L19 19"/>
  <path d="M16 19L20 19"/>
  <path d="M4 16.5L4 4.5C4 3.117 5.117 2 6.5 2L19 2C19.551 2 20 2.449 20 3L20 13C20 13.551 19.551 14 19 14L6.5 14C5.117 14 4 15.117 4 16.5C4 17.883 5.117 19 6.5 19L10 19"/>
  <path d="M9 2L9 14"/>
  <path d="M10 17L10 22L13 21L16 22L16 17Z"/>
</svg>
